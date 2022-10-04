var apiKey = '<!--google-api-key-->';

/*
//https://www.w3.org/TR/speech-synthesis11/#S3.2.4
//https://developers.google.com/assistant/conversational/ssml-phonemes#levels_of_stress

      <datalist id="pos_" size="1">
            <option value="Options"></option>
            <option class="*" value="*">any word</option>
            <option class="," value=",">several</option>
            <option class="_INF" value="_">inflection</option>
            <option value="Part of speech"></option>
            <option class="_NOUN_" value="$">noun</option>
            <option class="_VERB_" value="=">verb</option>
            <option class="_ADJ_" value="%">adjective</option>
            <option class="_ADV_" value="~">adverb</option>
            <option class="_PRON_" value="|">pronoun</option>
            <option class="_DET_" value="^">determiner</option>
            <option class="_ADP_" value="@">adposition</option>
            <option class="_NUM_" value="#">numeral</option>
            <option class="_CONJ_" value=";">conjunction</option>
            <option class="_PRT_" value="`">particle</option>
            <option value="Sentence"></option>
            <option class="_ROOT_=>" value=">">root</option>
            <option class="_START_" value=":">start</option>
            <option class="_END_" value=".">end</option>
        </datalist>
*/

var pos = {
  "UNKNOWN":"_",
  "ADJ":"Adjective",
  "ADP":"Adposition", // (preposition and postposition)
  "ADV":"Adverb",
  "CONJ":"Conjunction",
  "DET":"Determiner",
  "NOUN":"Noun", // (common and proper)
  "NUM":"Cardinal number",
  "PRON":"Pronoun",
  "PRT":"Particle", // or other function word
  "PUNCT":"Punctuation",
  "VERB":"Verb", // (all tenses and modes)
  "X":"_", // foreign words, typos, abbreviations
  "AFFIX":"Affix"
};

function languages(tl) {
//var tl="en";
   var apiEndpoint = 'https://translate.googleapis.com/v3/projects/freealise-181308/locations/global/supportedLanguages?display_language_code='+tl+'&key=' + apiKey;
   var nlOptions = {
     method : 'get',
     contentType: 'application/json',
     headers: { Authorization: "Bearer "+ ScriptApp.getOAuthToken()},
     muteHttpExceptions: true
   };
   var response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
   var parsed = JSON.parse(response);
   //Logger.log(response);
   var l = "";
   for (var i=0; i<parsed.languages.length; i++) {
     l += "<option value='" + parsed.languages[i].languageCode + "'>" + parsed.languages[i].displayName + "</option>\n";
   }
   //Logger.log(l);
   return l;
}


//billing over 100 q.per day - $5 per 1000 q.
function spell(words, tl) {
//var words = "Oakword silence stupid is.";
//var tl = "en";
 var words_ = encodeURIComponent(words);
 var apiEndpoint = "https://customsearch.googleapis.com/customsearch/v1?cx=c67b7f7baea614d96&q="+words_+"&cr=countryUS&gl=us&lr=lang_en&ie=utf8&oe=utf8&language="+tl+"&key=" + apiKey;
 var nlOptions = {
   method : 'get',
   contentType: 'application/json',
   headers: { Authorization: "Bearer "+ ScriptApp.getOAuthToken()},
   muteHttpExceptions: true
 };
 var response = UrlFetchApp.fetch(apiEndpoint, nlOptions).getContentText();
 var parsed = JSON.parse(response);
 if (parsed.spelling) {
   response = parsed.spelling.correctedQuery;
 } else {
   response = words;
 }
//Logger.log(response);
 return response;
}


function getBW() {
  getBasicWords(0, 10000);
}


function getBasicWords(s, l) {
  var dataEndpoint = 'https://freealise-181308.firebaseio.com/cmudict/.json?orderBy=%224%22&startAt='+s+'&limitToFirst='+l;
  var r = UrlFetchApp.fetch(dataEndpoint).getContentText();
  var d = Object.keys(JSON.parse(r)).join(". ") + ".";
  var apiEndpoint = 'https://language.googleapis.com/v1/documents:analyzeSyntax?key=' + apiKey;
   var nlData = {
     document: {
       language: 'en',
       type: 'PLAIN_TEXT',
       content: d
     },
     encodingType: 'UTF8'
   };
   var nlOptions = {
     method : 'post',
     contentType: 'application/json',
     payload : JSON.stringify(nlData)
   };
   var response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
   var parsed = JSON.parse(response);
   var tags = ['NOUN','VERB','ADJ','ADV','NUM','UNKNOWN','X','PUNCT'];
   var r = [];
   var j = 0;
   for (var i=0; i<parsed.tokens.length; i++) {
     var json = '{"'+parsed.tokens[i].text.content+'":"'+parsed.tokens[i].partOfSpeech.tag+'"}';
     if (!tags.includes(parsed.tokens[i].partOfSpeech.tag) && !r.includes(json) && parsed.tokens[i].text.content.search(/\W/)==-1) {
       r[j] = json;
       j++;
       //Logger.log(parsed.tokens[i].partOfSpeech.tag);
     }
   }
   Logger.log(r.join(",")+",");
   if (s <= 130000) {
     getBasicWords(s+l, l);
   }
   //return r.join(",");
}


var speeches = [
  "Son, we live in a world that has walls, and those walls have to be guarded by men with guns. Who’s gonna do it? You? You, Lt. Weinberg? I have a greater responsibility than you could possibly fathom. You weep for Santiago and you curse the Marines. You have that luxury. You have the luxury of not knowing what I know; that Santiago’s death, while tragic, probably saved lives. And my existence, while grotesque and incomprehensible to you, saves lives. You don’t want the truth because deep down in places you don’t talk about at parties, you want me on that wall. You need me on that wall. We use words like honor, code, loyalty. We use these words as the backbone of a life spent defending something. You use them as a punchline. I have neither the time nor the inclination to explain myself to a man who rises and sleeps under the blanket of the very freedom that I provide, and then questions the manner in which I provide it! I would rather you just said “thank you” and went on your way, Otherwise, I suggest you pick up a weapon and stand a post. Either way, I don’t give a damn what you think you are entitled to!", //Jack Nicholson in A Few Good Men, -0.1

  "I am not a destroyer of companies. I am a liberator of them! The point is, ladies and gentleman, that greed, for lack of a better word, is good. Greed is right, greed works. Greed clarifies, cuts through, and captures the essence of the evolutionary spirit. Greed, in all of its forms; greed for life, for money, for love, knowledge has marked the upward surge of mankind. And greed, you mark my words, will not only save Teldar Paper, but that other malfunctioning corporation called the U.S.A.", //Michael Douglas as Gordon Gekko in Oliver Stone’s “Wall Street”, -0.2

  "Right? You in the right! Look, Starrett. When I come to this country, you weren’t much older than your boy there. We had rough times, me and other men that are mostly dead now. I got a bad shoulder yet from a Cheyenne arrowhead. We made this country. Found it and we made it. We worked with blood and empty bellies. The cattle we brought in were hazed off by Indians and rustlers. They don’t bother you much anymore because we handled ’em. We made a safe range out of this. Some of us died doin’ it but we made it. And then people move in who’ve never had to rawhide it through the old days. They fence off my range, and fence me off from water. Some of ’em like you plow ditches, take out irrigation water. And so the creek runs dry sometimes and I’ve got to move my stock because of it. And you say we have no right to the range. The men that did the work and ran the risks have no rights?", //Emile Meyer as Ryker in “Shane”, -0.1

  "So you think we might have put a few people out of business today? That it’s all for naught? You’ve been doing that everyday for almost forty years, Sam. And if this is all for naught, then so is everything out there. It’s just money; it’s made up. Pieces of paper with pictures on them, so we don’t have to kill each other just to get something to eat. It’s not wrong. And it’s certainly no different today than it’s ever been. 1637, 1797, 1819, ’37, ’57, ’84, 1901, ’07, ’29, 1937, 1974, 1987—Jesus, didn’t that one fuck me up good—’92, ’97, 2000, and whatever we want to call this. It’s all just the same thing over and over; we can’t help ourselves. And you and I can’t control it, or stop it, or even slow it. Or even ever-so-slightly alter it. We just react. And we make a lot of money if we get it right. And we get left by the side of the road if we get it wrong. And there have always been and there always will be the same percentage of winners and losers, happy foxes and sad sacks, fat cats and starving dogs in this world. Yeah, there may be more of us today than there’s ever been. But the percentages, they stay exactly the same.", //Jeremy Irons as John Tuld in “Margin Call”, -0.2
];

//has to be in context and original language
//can detect propaganda (antiplot) and storytelling faults

function sentiment(words, tl) {
 var words = speeches[3];
 var apiEndpoint = 'https://language.googleapis.com/v1/documents:analyzeSentiment?key=' + apiKey;
 var nlData = {
   document: {
     language: tl,
     type: 'PLAIN_TEXT',
     content: words
   },
   encodingType: 'UTF8'
 };
 var nlOptions = {
   method : 'post',
   contentType: 'application/json',
   payload : JSON.stringify(nlData)
 };
 var response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
 var parsed = JSON.parse(response);
 var s = "";
 //Logger.log(response);
 return s;
}
