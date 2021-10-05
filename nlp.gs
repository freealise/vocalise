var apiKey = '<!--key-->';
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

function translate_beta(words, tl, sl) {
  if (tl != sl) {
     words = words.replace(/\+/g, " ").replace(/%3F/g, '?').replace(/%21/g, '!');
     var translation = words;
     var apiEndpoint = 'https://translate.googleapis.com/v3/projects/freealise-181308:translateText?key=' + apiKey;
     var nlData = {
       "sourceLanguageCode": sl,
       "targetLanguageCode": tl,
       "contents": [translation],
       "mimeType": "text/plain"
     };
     var nlOptions = {
       method : 'post',
       contentType: 'application/json',
       headers: { Authorization: "Bearer "+ ScriptApp.getOAuthToken()},
       muteHttpExceptions: true,
       payload: JSON.stringify(nlData)
     };
     var response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
     //Logger.log(response);
     var parsed = JSON.parse(response);
     var translation = parsed.translations[0].translatedText;
     return translation;
  }
}

function translate(words, tl, sl) {
//var words = "cats";
//var sl = "en";
//var tl = "cs";
  if (tl != sl) {
    var apiEndpoint = 'https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=' + sl + '&tl=' + tl + '&q=' + words.toLowerCase();
    var response = UrlFetchApp.fetch(apiEndpoint);
    var parsed = JSON.parse(response);
    var inf = [];
    var j = 0;
    if (parsed.query_inflections) {
      for (var i=0; i<parsed.query_inflections.length; i++) {
        var f = parsed.query_inflections[i].written_form;
        if (!inf.includes(f)) {
          inf[j] = f;
          j++;
        }
      }
    }
    var d = [];
    if (parsed.dict) {
      for (var i=0; i<parsed.dict.length; i++) {
        d[i] = "<b>" + parsed.dict[i].base_form + "</b> <i>" + parsed.dict[i].pos + "</i><br/>" + parsed.dict[i].terms.join(', ');
      }
    }
  //Logger.log(d.join("<br/><br/>") + "\n" + inf.join(","));
    return d.join("<br/><br/>") + "\n" + inf.join(",");
  }
}

function phrases(words, tl_) {
//var words = "cat+%2A";
//var tl_ = "26";
  var apiEndpoint = "https://books.google.com/ngrams/interactive_chart?content=" + words + "&year_start=1800&year_end=2019&case_insensitive=&corpus=" + tl_ + "&smoothing=0";
  try {
    var response = UrlFetchApp.fetch(apiEndpoint).getContentText();
    response = response.split("ngrams.data = ")[1].split("];")[0]+"]";
    var parsed = JSON.parse(response);
    var r = "";
    for (var i=0; i<parsed.length; i++) {
      if (parsed[i].ngram && parsed[i].ngram.indexOf("*") == -1) {
        var w = parsed[i].ngram.split("_")[0].split(" ");
        var w = w[w.length-1];
        var w_ = parsed[i].ngram.replace(/_\w+/g, "");
        r += "<option value='" + w + "'>" + w_ + "</option>\n";
      }
    }
    return r;
  } catch(error) {
    //Logger.log(error);
    return "<option>No phrases found</option>";
  }
}

function correct(words, tl, sl) {
//var words = "I see cat";
//var tl = "en";
//var sl = "fy";
   words = words.replace(/\+/g, " ").replace(/%3F/g, '?').replace(/%21/g, '!');
   var translation = words;
   var apiEndpoint = 'https://translate.googleapis.com/v3/projects/freealise-181308:translateText?key=' + apiKey;
   var j = 0;
   translation = spelling(translation, tl);
   while (j < 2) {
     //Logger.log(translation);
     var nlData = {
        "sourceLanguageCode": tl,
        "targetLanguageCode": sl,
        "contents": [translation],
        "mimeType": "text/plain"
     };
     var nlOptions = {
       method : 'post',
       contentType: 'application/json',
       headers: { Authorization: "Bearer "+ ScriptApp.getOAuthToken()},
       muteHttpExceptions: true,
       payload: JSON.stringify(nlData)
     };
     var response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
     //Logger.log(response);
     var parsed = JSON.parse(response);
     var translation = parsed.translations[0].translatedText;
     //Logger.log(translation);
     var l = tl; tl = sl; sl = l;
     j++;
   }
   return translation;
   //return parsed.translations[0].detectedLanguageCode;
}

function spelling(words, tl) {
//var words = "cars breed in oakword silence";
//var tl = "en";
 var words_ = encodeURIComponent(words);
 var apiEndpoint = "https://customsearch.googleapis.com/customsearch/v1?cx=69f5fae6aeba217dd&q="+words_+"&cr=countryUS&gl=us&lr=lang_en&ie=utf8&oe=utf8&language="+tl+"&key=" + apiKey;
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

function ngrams(words, label, tl_) {
//var tl_ = "26";
//var label = "_ROOT_=>_VERB_";
//var words = "_NOUN_+_VERB_";
  words = "_START_+" + words + "+_END_";
  var w = words.split("+");
  if (w.length > 5) {
    words = "";
    for (var i=0; i<w.length-4; i++) {
      for (var j=i; j<i+5; j++) {
        words += w[j] + "+";
      }
      words += "%2C"; //comma
    }
  }
  words = encodeURIComponent(label) + "%2C" + words;
  var apiEndpoint = "https://books.google.com/ngrams/interactive_chart?content=" + words + "&year_start=1800&year_end=2019&case_insensitive=&corpus=" + tl_ + "&smoothing=0";
  var response = UrlFetchApp.fetch(apiEndpoint).getContentText();
  try {
    response = response.split("ngrams.data = ")[1].split(";")[0];
    var parsed = JSON.parse(response);
    var avg = [];
    for (var j=0; j<parsed.length; j++) {
      avg[j] = 0;
      for (var i=0; i<parsed[j].timeseries.length; i++) {
        avg[j] += parsed[j].timeseries[i];
      }
      avg[j] = avg[j] / parsed[j].timeseries.length;
    }
    //Logger.log(avg.join(","));
    //Logger.log(parsed[0].ngram + ", " + parsed[1].ngram + ", " + parsed[2].ngram + " " + avg.join(" "));
    return avg.join(",");
  } catch(error) {
    //Logger.log("0");
    return "0.0";
  }
}

function syntax(words, tl, tl_, c) {
 var apiEndpoint = 'https://language.googleapis.com/v1/documents:analyzeSyntax?key=' + apiKey;
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
 if (c == "0") {
   var ph = "";
   var label = "";
   for (var i=0; i<parsed.tokens.length; i++) {
     if (parsed.tokens[i].partOfSpeech.tag.length < 5 && parsed.tokens[i].partOfSpeech.tag.length > 2) {
       ph += "_" + parsed.tokens[i].partOfSpeech.tag + "_ ";
     }
     if (parsed.tokens[i].dependencyEdge.label == "ROOT") {  //part of sentence
       label = "_ROOT_=>_"+parsed.tokens[i].partOfSpeech.tag+"_";
     }
   }
   ph = ph.trim();
   return ngrams(ph.replace(/ /g, "+"), label, tl_);
 } else {
   var p = [];
   var d = [];
   var l = [];
   for (var i=0; i<parsed.tokens.length; i++) {
     p[i] = JSON.stringify(parsed.tokens[i].partOfSpeech).replace(/,?"\w+":"\w+_UNKNOWN"/gi, "").replace(/"tag":/, '"'+pos[parsed.tokens[i].partOfSpeech.tag]+'":');
     d[i] = parsed.tokens[i].dependencyEdge.headTokenIndex;
     l[i] = parsed.tokens[i].lemma;
   }
   var p = "["+p.join(",")+"]";
   var d = d.join(" ");
   var l = l.join(" ");
   return p + "\n" + d + "\n" + l;
 }
}

