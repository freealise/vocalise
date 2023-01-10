var v_ssml = "iː ɪ eɪ ɛ æ ə ɚ ʌ ɑː ɔː oʊ ʊ uː aɪ aʊ ɔɪ";
var c_ssml = "p b t d k ɡ m n ŋ f v s z θ ð ʃ ʒ h l ɹ ʧ ʤ j w";
//https://en.wikipedia.org/wiki/Sonority_Sequencing_Principle

var keys = [
  " i;IY;330;0.1664;0.3341;0.1498;0.0153",
  " ɪ;IH;300;0.3084;0.5288;0.3583;0.0380",
  "eɪ;EY;270;0.0699;0.0026;0.1882;0.0188",
  " ɛ;EH;240;0.1077;0.0145;0.2819;0.0266",
  " æ;AE;210;0.1024;0.0084;0.2871;0.0118",
  " ə;ER;180;0.1080;0.2535;0.0684;0.0021",
  " ʌ;AH;150;0.4567;1.0000;0.3641;0.0060",
  " ɑ;AA;120;0.0612;0.0046;0.1674;0.0115",
  " ɔ;AO;90;0.0557;0.0048;0.1554;0.0070",
  "oʊ;OW;60;0.0371;0.0182;0.0857;0.0075",
  " ʊ;UH;30;0.0112;0.0008;0.0310;0.0018",
  " u;UW;0;0.0605;0.0202;0.1523;0.0089",
  "aɪ;AY;210;0.0483;0.0066;0.1246;0.0138",
  "ɔɪ;OY;180;0.0034;0.0001;0.0098;0.0004",
  "aʊ;AW;90;0.0156;0.0006;0.0442;0.0021",
  //"__;__;0;0.0000;0.0000;0.0000;0.0000",
];

var keys_ = [
  "b,B,0.2141,0.25",
  "p,P,0.2477,0.25",
  "d,D,0.5656,0.25",
  "t,T,0.9327,0.25",
  "ʤ,JH,0.0791,0.25",
  "ʧ,CH,0.0717,0.25",
  "g,G,0.0920,0.25",
  "k,K,0.3811,0.25",
  "v,V,0.2394,0.5",
  "f,F,0.2387,0.5",
  "ð,DH,0.6531,0.5",
  "θ,TH,0.0758,0.5",
  "ʒ,ZH,0.0086,0.5",
  "ʃ,SH,0.1072,0.5",
  "z,Z,0.4163,0.5",
  "s,S,0.5710,0.25",
  "ɹ,R,0.5663,0.5",
  "h,HH,0.1739,0.5",
  "w,W,0.2890,0.75",
  "m,M,0.3173,0.75",
  "_,_,1,0",
  "n,N,1.0000,0.75",
  "ŋ,NG,0.1000,0.75",
  "l,L,0.4471,0.75",
  "j,Y,0.0911,0.75",
];

var kbrd = {
  '`': '_',
  '1': 'i_',
  '2': 'ɪ_',
  '3': 'eɪ_',
  '4': 'ɛ_',
  '5': 'æ_',
  '6': 'ə_',
  '7': 'ʌ_',
  '8': 'ɑ_',
  '9': 'ɔ_',
  '0': 'oʊ_',
  '-': 'ʊ_',
  '=': 'u_',
  'q': 'θ',
  'w': 'w',
  'e': 'ʃ',
  'r': 'ɹ',
  't': 't',
  'y': 'ʤ',
  'u': 'ŋ',
  'i': 'ˈ',
  'o': '·',
  'p': 'p',
  '[': 'aɪ_',
  ']': 'ɔɪ_',
  '\\': 'aʊ_',
  'a': 'ʒ',
  's': 's',
  'd': 'd',
  'f': 'f',
  'g': 'g',
  'h': 'h',
  'j': 'j',
  'k': 'k',
  'l': 'l',
  ';': 'ˌ',
  '\'': '_',
  'z': 'z',
  'x': 'ð',
  'c': 'ʧ',
  'v': 'v',
  'b': 'b',
  'n': 'n',
  'm': 'm',
  ',': '_',
  '.': '_',
  '/': '_',
  '_': '_',
  ' ': ' ',
};

var superscript = {
  '·':'',
  'ˈ':'ˊ',
  'ˌ':'`',
  '_':'-',
  'eɪ':'ᵉᶦ',
  'oʊ':'ᵒᶷ',
  'aɪ':'ᵃᶦ',
  'ɔɪ':'ᵓᶦ',
  'aʊ':'ᵃᶷ',
  'a':'ᵃ',
  'i':'ⁱ',
  'ɪ':'ᶦ',
  'e':'ᵉ',
  'ɛ':'ᵋ',
  'æ':'ᵆ',
  'ə':'ᵊ',
  'ʌ':'ᶺ',
  'ɑ':'ᵅ',
  'ɔ':'ᵓ',
  'o':'ᵒ',
  'ʊ':'ᶷ',
  'u':'ᵘ',
  'b':'ᵇ',
  'p':'ᵖ',
  'd':'ᵈ',
  't':'ᵗ',
  'ʤ':'ᵈᶾ',
  'ʧ':'ᵗᶴ',
  'g':'ᶢ',
  'k':'ᵏ',
  'v':'ᵛ',
  'f':'ᶠ',
  'ð':'ᶞ',
  'θ':'ᶿ',
  'ʒ':'ᶾ',
  'ʃ':'ᶴ',
  'z':'ᶻ',
  's':'ˢ',
  'ɹ':'ʴ',
  'h':'ʰ',
  'w':'ʷ',
  'm':'ᵐ',
  'l':'ˡ',
  'n':'ⁿ',
  'j':'ʲ',
  'ŋ':'ᵑ',
  'y':'ʸ',
  'x':'ˣ',
  'c':'ᶜ',
  'r':'ʳ',
  'q':'٩'
};
//https://en.wikipedia.org/wiki/Spacing_Modifier_Letters
//https://en.wikipedia.org/wiki/Secondary_articulation

var s = ["·", "ˈ", "ˌ"];
var stress = ("┈┄╌─┉┅╍━").split("");
var rate = ("│┃╎╏┆┇┊┋").split("");
var freq = ["        ", "ᐧ       ", "ᐧᐧ      ", "ᐧᐧᐧ     ", "ᐧᐧᐧᐧ    ", "ᐧᐧᐧᐧᐧ   ", "ᐧᐧᐧᐧᐧᐧ  ", "ᐧᐧᐧᐧᐧᐧᐧ ", "ᐧᐧᐧᐧᐧᐧᐧᐧ"];

var tone = [ '꜌', '꜋', '꜊', '꜉', '꜈', 'ᣟ𝍩', '꜑', '꜐', '꜏', '꜎', '꜍', '𝍩ᣟ' ]; //ᐧ ⸽
var tone_chart = ['꜒', '˥', '꜓', '˦', '꜔', '˧', '꜕', '˨',  '꜖', '˩'];
//https://en.wikipedia.org/wiki/Tone_letter
//https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
//https://en.wikipedia.org/wiki/Counting_Rod_Numerals_(Unicode_block)

var colors = [0,1,0,1,0,0,1,0,1,0,1,0,0];

/*

use CMU->IPA / add Britfone ?
ˈaɪ
ˈaʊ
ˈeɪ
ˈiː
ˈuː
ˈæ
ˈɐ
ˈɑː
ˈɒ
ˈɔɪ
ˈɔː-
ˈə
ˈəʊ
ˈɛ
ˈɛə-
ˈɜː-
ˈɪ
ˈɪə-
ˈʊ
ˈʊə-
(aə, oə ?)
Diphtong sound

| IY IH EY EH AE ER AH AA AO OW UH UW |
| i: i  e: e  æ  ə  a  a: o  o: u  u: | F2
| D# C# B  A  G  F  D# C# B  A  G  F  |
|    2100      1400               700 | Hz

Intelligibility is preserved across a fairly wide range when F0 and FFs are scaled up or down in proportionate amounts (e.g., Chiba and Kajiyama, 1941; Daniloff et al., 1968). However, F0 and FFs do not scale proportionately in natural speech. For example, the F0 difference between adult male and adult female voices is about 80%–90%, while FFs increase only 12%–15% (Peterson and Barney, 1952).


People have a tendency to think of intonation as being directly linked to the speaker's emotions. In fact, the meaning of intonation contours is as conventionalized as any other aspect of language. Different languages can use different conventions, giving rise to the potential for cross-cultural misunderstandings.

reading the one language with the intonation pattern appropriate to the other can give rise to entirely unintentional effects: English with Russian intonation sounds unfriendly, rude or threatening, to the native speaker of English; Russian with an English intonation sounds affected or hypocritical to the native speaker of Russian.
Comrie (1984); "Interrogativity in Russian"


whistled language
In a non-tonal language, segments may be differentiated as follows:
-Vowels are replaced by a set of relative pitch ranges generally tracking the f2 formant of spoken language.
-Stress is expressed by higher pitch or increased length
-Consonants are produced by pitch transitions of different lengths and height, plus the presence or absence of occlusion. ("Labial stops are replaced by diaphragm or glottal occlusions.")


noun, adjective, verb, adverb, pronoun,
determiner, preposition, conjunction, interjection

English has strict word order, what a word can possibly be goes with the definition
*/

var _pos = {
  "_NOUN": ["﹞", "noun"],
  "_VERB": ["﹥", "verb"],
  "_ADJ": ["﹚", "adjective"],
  "_ADV": ["﹜", "adverb"],
  "_NUM": ["﹟", "numeral"],
  "_ADP": ["﹫", "adposition"],
  "_PRON": ["﹡", "pronoun"],
  "_CONJ": ["﹠", "conjunction"],
  "_DET": ["﹦", "determiner"],
  "_PRT": ["﹑", "particle"]
};

//https://intranet.secure.griffith.edu.au/schools-departments/natural-semantic-metalanguage
var primes = {
  "⍩": ["I", "F 2-19"],
  "⍨": ["you", "F 2-20"],
  "≖": ["someone / who", "G 2-23"],
  "⎉": ["person", "B 1-08"],
  "⛶": ["something / thing / what", "A 1-02"],
  "‡": ["body", "H 2-27"],
  "⊂": ["kind", "F 1-20"],
  "⋲": ["part", "A 2-03"],
  "≈": ["like / as / way", "A 2-01"],
  "☟": ["this", "A 1-03"],
  "⌯": ["same", "B 1-05"],
  "⎇": ["other / else", "A 1-04"],
  "1": ["1", "B 1-06"],
  "2": ["2", "B 1-07"],
  "‰": ["some", "D 1-12"],
  "∀": ["all", "D 1-13"],
  "⛆": ["much / many", "C 1-09"],
  "✓": ["good / well", "D 2-12"],
  "⍻": ["bad", "D 2-11"],
  "⍜": ["big", "E 1-17"],
  "⍛": ["small", "E 1-18"],
  "⋯": ["think", "C 2-07"],
  "♡": ["feel", "D 2-13"],
  "⎋": ["want", "C 2-09"],
  "⚟": ["hear", "H 1-28"], //⚞
  "⍝": ["touch", "F 1-22"],
  "⊙": ["know", "C 2-08"],
  "ᐶ": ["see", "A 1-01"],
  "⎃": ["say", "H 1-29"],
  "⎁": ["word", "H 1-30"],
  "⊨": ["true", "H 1-31"],
  "␥": ["do", "B 2-04"], //⌤
  "⎚": ["happen", "B 2-05"], //╌
  "⎌": ["move", "E 2-18"],
  "": ["be", " -"],
  "∃": ["is", "D 1-14"],
  "¤": ["have", "A 2-02"],
  "❦": ["live", "E 1-16"],
  "⛼": ["die", "H 2-28"],
  "⧖": ["time / when", "E 2-14"],
  "⋈": ["now", "F 2-22"],
  "⊰": ["before", "E 2-15"],
  "⊱": ["after", "G 2-24"],
  "⇼": ["long time", "E 2-16"],
  "⇹": ["short time", "E 2-17"],
  "↔": ["some time", "G 2-25"],
  "⥈": ["moment", "G 2-26"],
  "⊹": ["somewhere / place / where", "G 1-25"], //⚲
  "⯐": ["here", "F 2-21"], //⟟
  "∸": ["above", "G 1-26"],
  "⨪": ["below", "H 2-30"],
  "⟷": ["far", "F 1-23"],
  "↭": ["near", "F 1-24"],
  "וּ": ["side", "G 1-27"],
  "⛋": ["in", "C 1-10"],
  "∅": ["not", "C 1-11"],
  "¿": ["maybe", "H 2-29"], //⸮
  "≍": ["can", "C 2-10"],
  "∵": ["because", "B 2-06"],
  "⌥": ["if", "F 1-21"],
  "∴": ["then", "F 1-21"],
  "⚭": ["and", "A 3-02"],
  "⚮": ["or", "A 3-03"],
  "¡": ["very", "E 1-19"],
  "≻": ["more / anymore", "D 1-15"],
};


var url = "https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec"; //"http://192.168.0.61:8080/";
var fbase = "https://freealise-181308.firebaseio.com/cmudict/";
var base = "https://docs.google.com/spreadsheets/d/1lx3voPc-GWdzkhiCetUh0UGtU5FzdnAVMH6YZ4qBQrQ/gviz/tq?tqx=out:csv&gid=";
var gid = "2110937646";
var gid_ = "841483007";
var words_ = [];
var w = [];
var phoneme = [];

var k = document.getElementById("keys");
var k_ = document.getElementById("keys_");
var v = document.getElementById("keys").querySelectorAll("select");
var c_ = document.getElementById("keys_").querySelectorAll("a");
var tgl = document.getElementById("tgl");
var tone_ = document.getElementById("tone");
var vowels = document.getElementById("vowels");
var consonants = document.getElementById("consonants");
var vowels_ = document.getElementById("vowels_");
var consonants_ = document.getElementById("consonants_");
var _vowels = document.getElementById("_vowels");
var _consonants = document.getElementById("_consonants");
var word = document.getElementById("word");
var _word = document.getElementById("_word");
var highlight = document.getElementById("highlight");
var dict = document.getElementById("dict");
var res = document.getElementById("res");
var phrase = document.getElementById("phrase");
var _phrase = document.getElementById("_phrase");
var corpus = document.getElementById("corpus");
var languages = document.getElementById("languages");
var accent = document.getElementById("accent");
var trends_chart = document.getElementById("trends_chart");
var wiki_ = document.getElementById("wiki_");
var mobile = document.getElementById("mobile");
var library = document.getElementById("library");
var library_iframe = document.getElementById("library_iframe");
var artist = document.getElementById("artist");
var song = document.getElementById("song");
var resources = document.getElementById("resources");
var credits = document.getElementById("credits");
var orig_link = document.getElementById("orig_link");
var nsm = document.getElementById("nsm");
var ltwf = document.getElementById('ltwf');
ltwf_ = ltwf.contentWindow || ( ltwf.contentDocument.document || ltwf.contentDocument);
var pos = document.getElementById('pos');
var genre = document.getElementById("genre");
var submit = document.getElementById("submit");
var outline = document.getElementById("outline");
var dl = document.getElementById("dl");
var ul = document.getElementById("ul");
var toc = document.getElementById("toc");
var field, gform, cname, cvalue;
var h = "";
var res_old = "";
var regexp = [];
var regexp_ = [];
var ks_ = [];
var sonority = {};
var ctl = res;
var ln = 20;
var wn = 0;
var tl = ["en", "fy"];
var sl = "en";
var orig, corr;
var a_c = false;

var r_ = new RegExp("("+Object.keys(superscript).join("|")+")", "g");
var _r = new RegExp("("+Object.values(superscript).join("|").slice(1)+")", "g");
var note_ = new RegExp("("+tone.join("|")+")", "g");
var note_n = new RegExp("[^("+tone.join("|")+"| )]", "g");
var stress_ = new RegExp("("+stress.join("|")+")", "g");
var stress_n = new RegExp("[^("+stress.join("|")+"| )]", "g");
var ph_ = new RegExp("("+v_ssml.replace(/\w/g, "").trim().replace(/\s+/g, "|")+"|"+c_ssml.replace(/\w/g, "").trim().replace(/\s+/g, "|")+")", "g");
var _v = new RegExp("("+v_ssml.replace(/\s/g, "|")+")", "g");
var _c = new RegExp("("+c_ssml.replace(/\s/g, "|")+")", "g");
var pos_ = new RegExp("("+Object.keys(_pos).join("|")+")", "g");

function initPos() {
  pos.innerHTML = '<option value="">🗩</option><optgroup label="Part of speech">';
  for (var i=0; i<Object.keys(_pos).length; i++) {
    pos.innerHTML += '<option value="'+Object.values(_pos)[i][0]+'">'+Object.values(_pos)[i][0]+' '+Object.values(_pos)[i][1]+'</option>';
  }
  pos.innerHTML += '</optgroup>';
}
initPos();

for (var i=0; i<keys.length; i++) {
  var ks = keys[i].split(";");
  var lnk = v[i];
  lnk.id = i;
  ks_[i] = ks[0].trim();
  lnk.title = ks_[i];
  lnk.onfocus = function(e){this.selectedIndex=-1;};
  lnk.onblur = function(e){this.selectedIndex=0;};
  lnk.onchange = function(e){if(ctl!=consonants){addPhoneme(e.target.value, e.target.style.backgroundColor);}this.blur();};
  var bg = 100 - Math.pow(parseFloat(ks[3]), 1/3)*50;
  lnk.style.backgroundColor = "hsl(" + ks[2] + ", 100%, " + bg + "%)";
  lnk.innerHTML += "<option style='background-color:hsl("+ks[2]+", 100%, "+bg+"%);' value='"+ks_[i]+"_'>"+ks[0]+"</option>";
  for (var j=0; j<=2; j++) {
    var bg = 100 - Math.pow(parseFloat(ks[4+j]), 1/3)*50;
    lnk.innerHTML += "<option style='background-color:hsl("+ks[2]+", 100%, "+bg+"%);' value='"+ks_[i]+s[j]+"'>"+ks[0]+s[j]+"</option>";
  }
  regexp[i] = [];
  regexp[i][0] = new RegExp("("+superscript[ks_[i]]+"[ˊ`]*)", "g");
  regexp[i][1] = "hsl(" + ks[2] + ", 100%, 50%)";
  sonority[ks_[i]] = 1.0;
}

for (var i=0; i<keys_.length; i++) {
  var ks = keys_[i].split(",");
  var lnk = c_[i];
  lnk.id = keys.length+i;
  lnk.onfocus=function(e){if(ctl!=vowels){addPhoneme(e.target.title, 'transparent');}};
  lnk.href="javascript:";
  lnk.innerText = ks[0] + " ";
  lnk.title = ks[0];
  var bg = 100 - Math.pow(parseFloat(ks[2]), 1/3)*100;
  lnk.style.color = "hsl(0, 0%, " + bg + "%)";
  regexp_[i] = [];
  regexp_[i][0] = new RegExp("("+superscript[ks[0]]+")", "g");
  regexp_[i][1] = "hsl(0, 0%, " + (100-ks[3]*50) + "%)";
  sonority[ks[0]] = parseFloat(ks[3]);
}

for (var i=0; i<tone.length; i++) {
  var ks = tone[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);' style='color:rgba(0,0,0,"+(colors[i]*0.75+0.25)+");'>"+ks+"</a> ";
}
tone_.innerHTML += "<br/>";
for (var i=0; i<stress.length; i++) {
  var ks = stress[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);'>"+ks+"</a> ";
}
tone_.innerHTML += "<br/>";
for (var i=0; i<tone_chart.length; i++) {
  var ks = tone_chart[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);'>"+ks+"</a> ";
}

nsm.innerHTML = nsm.innerText.replace(/\S/g, function(x){ return "<div><a href='about:blank' target='ltwf' onclick='loadBasicWords(&apos;"+primes[x][1]+"&apos;);' title='"+primes[x][0]+"'>"+x+"</a></div>"; }).replace(/(> <)/g, "><span></span><") + " <div id='nsm_lookup'><a href='https://learnthesewordsfirst.com/WordFindingTool.html#Input' target='ltwf'><i class='material-icons notranslate'>search</i></a></div>";
nsm.style.visibility = "hidden";


function findCursor(v) {
    var startPos = v.selectionStart;
    var endPos = v.selectionEnd;
    return startPos + "," + endPos;
}

function selectText() {
    var txt = "";
    if (window.getSelection) {
        txt = window.getSelection();
    }
    else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text.trim();
    }
    return txt;
}

function getQuery() {
  var q = selectText();
  if (!q || q.length == 0) {
    if (word.value.length == 0) {
      q = word.value;
    } else {
      q = phrase.value;
    }
  }
  return q;
}

function addWord(w_, _w) {
  //t.innerHTML += "<span style='background-color:" + clr + ";'>" + v + "</span> ";
  var cPos = findCursor(phrase).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  if (w_.search(/\D/g) != -1) {
    phrase.value = phrase.value.substr(0, b) + w_.split(' ')[0] + phrase.value.substr(d);
    phrase.setSelectionRange(d+w_.length+1, d+w_.length+1);
    phrase.focus();
  }
  word.value = _w;
}

function addPhoneme(p, clr) {
  var s = "";
  if (ctl == word || ctl == phrase) { s = " "; }
  if (ctl == res) {res_old = res.value;}
  //t.innerHTML += "<span style='background-color:" + clr + ";'>" + v + "</span> ";
  var cPos = findCursor(ctl).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  ctl.value = ctl.value.substr(0, b) + p + s + ctl.value.substr(d);
  ctl.setSelectionRange(b+p.length+s.length, b+p.length+s.length);
  ctl.focus();
}

function findWords() {
  //https://developers.google.com/chart/interactive/docs/querylanguage#where
  var query = null;
  if (word.value != "" && word.value.trim().search(/[*_·ˈˌ ]/) != -1) {
    var w_ = word.value.replace(/\s+/g, " ").replace(/_/g, "[^ ]+").replace(/\*/g, ".*").trim();
    query = "select A, F, D where A matches '" + w_ + "'";
  } else if (vowels.value != "" || consonants.value != "") {
    if (vowels.value != "") {
      var q = vowels.value.replace(/[*_·ˈˌ]/g, function(x){return x+" ";}).replace(/\s+/g, " ").replace(/_/g, "[^ ]+").replace(/\*/g, ".*").trim();
    } else {
      var q = ".*";
    }
    if (consonants.value != "") {
      var q_ = consonants.value.split("").join(" ").replace(/\s+/g, " ").replace(/_/g, "[^ ]").replace(/\*/g, ".*").trim();
    } else {
      var q_ = ".*";
    }
    query = "select A, F, D where B matches '" + q + "' and C matches '" + q_ + "'";
  } else if (word.value != "") {
    autoCompleter(word.value);
    ssp(word.value);
  }
  if (query != null) {
    word.value = "";
    word.placeholder = "Searching...";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText != "") {
          var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/\d+'>/g, function(x){ return freq[parseInt(Math.log2(x.slice(0,-2))/2)]; }).replace(/"\n"/g, "</option><option value='");
          _word.innerHTML = "<option value='" + r + "</option>";
          r = null;
        } else {
          _word.innerHTML = "";
        }
        word.placeholder = "Click for results";
        word.focus();
      }
    };
    xhttp.open("GET", base + gid + "&tq=" + encodeURIComponent(query), true);
    xhttp.send();
  }
}

function splitWord() {
  vowels.value = "";
  consonants.value = "";
  var wrd = word.value.split(" ");
  for (var i=0; i<wrd.length; i++) {
    if (wrd[i].search(/[_·ˈˌ]/) != -1) {
      vowels.value += wrd[i];
    } else {
      consonants.value += wrd[i];
    }
  }
  vowels.value = vowels.value.trim();
  consonants.value = consonants.value.trim();
  word.value = "";
}

function highlightText() {
  var d = findCursor(res).split(',')[1];
  var b_ = res.value.substr(0, d).split("\n");
  var ln = b_[b_.length-2];
  
  if (ln.search(/\w/gi) >= 0 && ln.charAt(ln.length-1) != " " && ln.search(note_) == -1 && ln.search(/[ˊ`_·ˈˌ]/g) == -1) {
    var wrd_ = ln.replace(/[\,\.\?\!]/g, "").split(" ");
    res.value = res.value.substr(0, d) + "…" + res.value.substr(d);
    loadTranscription(ln, wrd_, wrd_.length-1);
  }
  
  hl.scrollTop = res.scrollTop;
  hl.scrollLeft = res.scrollLeft;
}

function loadTranscription(ln, wrd_, count) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "") {
        var r = this.responseText.replace(r_, function (x){return superscript[x];}).replace(/[\s\"]/g, "");
        res.value = res.value.replace(ln+"\n…", ln+"\n…"+r+" ");
        count--;
        if (count>=0) {
          loadTranscription(ln, wrd_, count);
        } else {
          res.value = res.value.replace(ln+"\n…", ln+"\n");
          colorPhonemes();
        }
      }
    }
  };
  //var query = "select A where D = '" + wrd_[count].toLowerCase() + "' limit 1";
  //xhttp.open("GET", base + gid_ + "&tq=" + encodeURIComponent(query), true);
  xhttp.open("GET", fbase + wrd_[count].toLowerCase() + "/0.json", true);
  xhttp.send();
}

function colorPhonemes() {
  var str = res.value;
  var lines = str.split("\n");
  str = "";
  var cPos = findCursor(res).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  var ln = res.value.substr(0, b).split("\n").length-1;
  for (var j=0; j<lines.length; j++) {
    if (lines[j].search(_r) != -1) {
      for (var l=3; l>0; l--) {
        for (var i=0; i<regexp.length; i++) {
          lines[j] = lines[j].replace(regexp[i][0], function (x) {
              if (x.length == l) {
                return "<i style='color:" + regexp[i][1] + ";'>"+x.replace(/./g, "‗")+"</i>";
              } else {
                return x;
              }
          });
        }
      }
      for (var i=0; i<regexp_.length; i++) {
        lines[j] = lines[j].replace(regexp_[i][0], function (x) {
            return "<i style='color:" + regexp_[i][1] + ";'>"+x.replace(/./g, "ˍ")+"</i>";
        });
      }
    }
    str += lines[j]+"\n";
  }
  str = str.slice(0, -1);
  hl.innerHTML = str;
  hl.scrollTop = res.scrollTop;
  hl.scrollLeft = res.scrollLeft;
}


function ssp(txt) {
  ctl.style.border = "1px solid lightgray";
  var txt = txt.replace(/[*_·ˈˌ]/g, "").replace(/\s+/g, " ").trim().split(" ");
  for (var i=0; i<txt.length; i++) {
    if ((i == 0 || sonority[txt[i]] > sonority[txt[i-1]]) && (i == txt.length-1 || sonority[txt[i]] > sonority[txt[i+1]]) && sonority[txt[i]] < 1.0) {
      ctl.style.border = "1px dashed black";
    }
  }
}


function undo() {
  if (ctl == res) {
    res.value = res_old;
  }
}


function loadIndex(txt, i) {
  if (txt.indexOf(" ") == -1) {
    a_c = true;
    vowels.blur();
    consonants.blur();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var r = this.responseText.slice(1,-1).replace(/"\n"/g, "</option><option>");
        if (i=="A") {
          vowels_.innerHTML = "<option>" + r + "</option>";
          vowels.focus();
        } else {
          consonants_.innerHTML = "<option>" + r + "</option>";
          consonants.focus();
        }
      	r = null;
      	a_c = false;
      }
    };
    var query = "select "+i+" where "+i+" contains '" + txt + "'";
    xhttp.open("GET", base + gid_ + "&tq=" + encodeURIComponent(query), true);
    xhttp.send();
  }
}


function autoCompleter(txt) {
  if (txt.indexOf(" ") == -1) {
    a_c = true;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText != "") {
          var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/\d+'>/g, function(x){ return freq[parseInt(Math.log2(x.slice(0,-2))/2)]; }).replace(/"\n"/g, "</option><option value='");
          _word.innerHTML = "<option value='" + r + "</option>";
      	  r = null;
        } else {
          _word.innerHTML = "";
        }
      	a_c = false;
      }
    };
    var query = "select A, F, D where D contains '" + txt + "'";
    xhttp.open("GET", base + gid + "&tq=" + encodeURIComponent(query), true);
    xhttp.send();
  }
}


function loadLanguages() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      languages.innerHTML = this.responseText;
      if (languages.options.length > 0) {
        for (var i=0; i<languages.options.length; i++) {
          if (navigator.language.indexOf(languages.options[i].value) >= 0 && navigator.language.indexOf(tl[0]) == -1) {
          		languages.options[i].selected = true;
          		sl = languages.options[i].value;
          } else if (languages.options[i].value.indexOf(sl) >= 0) {
              languages.options[i].selected = true;
          }
        }
      }
    }
  };
  xhttp.open("GET", url + "?a=languages&tl=" + navigator.language, true);
  xhttp.send();
}


function getSentence() {
  var d = findCursor(res).split(',')[1];
  var b = res.value.substr(0, d).split("\n");
  var wrd = b[b.length-2].trim();
  phrase.value = "";
  phrase.placeholder = "…";
  _phrase.innerHTML = "";
  colorPhonemes();
  var wrd_ = wrd.replace(/\n\W*\n/g, "\n").replace(/\n/g, " ").replace(/[\,\"\'\-\:\;]/g, "").replace(/\?/g, " \?").replace(/[\!\.]/, function(x){return " "+x;}).split(" ");
  loadPunctuation(wrd_, 0, wrd);
  loadTranslation(wrd, "", tl[0], sl);
  wrd = wrd.replace(/[\n\W]/g, " ").trim();
  loadTrends(wrd);
}


function loadPunctuation(w, count, o) {
  if (w.length>2) {
    var q = w[count] + " * " + w[count+1];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var r = JSON.parse(this.responseText);
        var p = "";
        for (var i=r.phrases.length-1; i>=0; i--) {
          if (r.phrases[i].tks[1].tt.search(/[\,\"\'\-\:\;]/) != -1) {
            p = r.phrases[i].tks[1].tt;
          } else if (r.phrases[i].tks[1].tt == w[count+1]) {
            p = "";
          }
        }
        w[count] = w[count] + p + " ";
        count++;
        if (w[count+2]) {
          loadPunctuation(w, count, o);
        } else {
          w[count] = w[count] + w[count+1];
          w[count+1] = "";
          loadCorrection(w.join(""), o);
        }
      }
    };
    xhttp.open("GET", "https://api.phrasefinder.io/search?corpus=eng-us&format=json&nmax=3&query=" + encodeURIComponent(q), true);
    xhttp.send();
  } else {
    loadCorrection(w.join(""), o);
  }
}


function loadCorrection(wrd, o) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadTranslation(this.responseText, o, tl[0], tl[1]);
    }
  };
  xhttp.open("GET", url + "?a=spell&w=" + encodeURIComponent(wrd) + "&tl=" + tl[0], true);
  xhttp.send();
}


function loadTranslation(wrd, o, sl_, tl_) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      wrd = this.responseText.replace(/[\[\]]/g, "").split(",")[0].slice(1,-1);
      //console.log(wrd);
      if (o == "") {
        if (tl_ == sl && sl_ != sl) {
          phrase.value = wrd;
          _phrase.innerHTML += "<option>" + wrd + "</option>";
        }
      } else if (tl_ == tl[1]) {
        loadTranslation(wrd, o, tl[1], tl[0]);
      } else if (tl_ == tl[0]) {
        if (wrd != o) {
          phrase.value = wrd;
          _phrase.innerHTML += "<option>" + wrd + "</option>";
        }
        phrase.placeholder = "Phrase";
      }
    }
  };
  xhttp.open("GET", "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dt=bd&q=" + encodeURIComponent(wrd) + "&sl=" + sl_ + "&tl=" + tl_, true);
  xhttp.send();
}


function loadTrends(q) {
  var d = new Date().toISOString().split("T")[0];
  var q_ = q.split(",");
  var json = "";
  for (var i=0; i<q_.length; i++) {
    json += '{"keyword":"'+q_[i]+'","geo":"","time":"2004-01-01 '+d+'"},';
  }
  trends_chart.innerHTML = '<iframe width="100%" height="230" class="chart" src="data:text/html,' + encodeURIComponent('<html><head></head><body><style>#trends-widget-1{width:100%;height:294px;margin-top:-80px;}</style><script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/3045_RC01/embed_loader.js"></script><script type="text/javascript">trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":['+json+'],"category":0,"property":""}, {"exploreQuery":"date=all&q='+q.replace(/ /g, '%20')+'","guestPath":"https://trends.google.com:443/trends/embed/"});</script></body></html>') + '"></iframe><iframe name="ngram_chart" src="https://books.google.com/ngrams/interactive_chart?content='+q.replace(/ /g, '%20')+'&year_start=1800&year_end=2019&corpus=26&smoothing=0" width="100%" height="128" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no></iframe>';
}


function loadLibrary(artist, song) {
  library_iframe.innerHTML = '<iframe id="musixmatch" src="https://www.musixmatch.com/lyrics/'+artist.replace(/ /g, '-')+'/'+song.replace(/ /g, '-')+'/embed?theme=light" width="310" height="210" border="0"></iframe>';
}


function loadWiki() {
  var q = "" + getQuery();
  q = q.replace(/ /g, '_').toLowerCase();
  wiki_.innerHTML = "<iframe id='wiki' src='https://en.m.wikipedia.org/wiki/"+q+"' width='310' height='232' border='0'/>";
}


function orig_check() {
  var cPos = findCursor(res).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  if (b == d) {
    var ln = res.value.substr(0, b).split("\n").length-1;
    var q = res.value.split("\n")[ln];
  } else {
    var q = res.value.substring(b, d).replace(/\n/g, " ");
  }
  orig_link.href = "https://www.google.com/search?q=%22" + encodeURIComponent(q) + "%22";
}


function keepSymbols(key) {
  var b = ctl.selectionStart;
  var d = ctl.selectionEnd;
  if ((ctl.value.charAt(b) == "ᣟ" && ctl.value.slice(b-2,b) == "𝍩") || (ctl.value.charAt(b-1) == "ᣟ" && ctl.value.slice(b,b+2) == "𝍩")) {
    if (key == 'ArrowRight' || key == 'ArrowUp') {
      if (ctl.value.charAt(b) == "ᣟ") {
        ctl.setSelectionRange(b+1, b+1);
      } else {
        ctl.setSelectionRange(b+2, b+2);
      }
      ctl.focus();
    } else if (key == 'ArrowLeft' || key == 'ArrowDown' || key === null) {
      if (ctl.value.charAt(b) == "ᣟ") {
        ctl.setSelectionRange(d-2, d-2);
      } else {
        ctl.setSelectionRange(d-1, d-1);
      }
      ctl.focus();
    }
  }
}

function kb_symbols() {
  for (var i=0; i<c_.length; i++) {
    if (c_[i].dataset.alt) {
      if (c_[i].style.textDecoration == "underline") {
        c_[i].style.textDecoration = "none";
        c_[i].innerText = c_[i].title + " ";
        tgl.innerText = "toggle_off";
      } else {
        c_[i].style.textDecoration = "underline";
        c_[i].innerText = c_[i].dataset.alt;
        tgl.innerText = "toggle_on";
      }
    }
  }
}

function loadSyntax(q) {
  var cPos = findCursor(phrase).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  if (b == d) {
    var n = q.substr(0, b).replace(/[^\w\s]/g, "").trim().split(" ").length;
  } else {
    var n = q.replace(/[^\w\s]/g, "").trim().split(" ").length;
  }
  var q = q.replace(/[^\w\s]/g, "").trim().split(" ");
  for (var i=0; i<q.length; i++) {
    q[i] += "_*";
    if (q[i+1]) {
      q[i] = q[i] + " " + q[i+1];
    }
  }
  var q = q.join(",");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var json = JSON.parse("["+this.responseText.split(">[")[1].split("]<")[0]+"]");
      var r = "";
      for (var i=0; i<json.length; i++) {
        if (json[i].ngram.indexOf("_*") > -1) {
          var j = i+2;
          while (json[j] && json[j].ngram.split(" ")[0].split("_")[0] == json[i].ngram.split(" ")[0].split("_")[0]) {
            json[j].ngram = "";
            j++;
          }
          json[i].ngram = "";
        }
        if (json[i].ngram.length > 0) {
          r += json[i].ngram.split(" ")[0] + " ";
        }
      }
      if (b == d && phrase.value.charAt(b-1) == " " && (b == phrase.value.length || phrase.value.charAt(b) == " ")) {
        var q = r.trim().replace(/\w+\_/g, "_").replace(/\_\w+/g, function(x){ return x+"_"; });
        var q_ = q.split(" ");
        if (q_.length < 5) {
          q = "";
          for (var i=0; i<Object.keys(_pos).length; i++) {
            for (var j=0; j<=q_.length; j++) {
              if (j < n) {
                q += q_[j] + " ";
              } else if (j == n) {
                q += Object.keys(_pos)[i] + "_ ";
              } else {
                q += q_[j-1] + " ";
              }
            }
            q = q.trim() + ",";
          }
          loadPos(q, n);
        } else {
          initPos();
        }
      }
      r = r.trim().replace(pos_, function(x) { return _pos[x][0]; });
      phrase.value = r.substr(0, b+n) + " " + r.substr(b+n);
      phrase.setSelectionRange(b+n, d+n);
      phrase.focus();
    }
  };
  xhttp.open("GET", url + "?a=parse&q=" + encodeURIComponent(q), true);
  xhttp.send();
}

function loadPos(q, n) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var json = JSON.parse("["+this.responseText.split(">[")[1].split("]<")[0]+"]");
      for (var i=0; i<json.length; i++) {
        if (json[i].ngram.length > 0) {
          json[i].ngram = json[i].ngram.split(" ")[n].slice(0,-1);
          json[i].ts = json[i].timeseries[json[i].timeseries.length-1];
        }
      }
      json.sort(function(a, b) { return b.ts - a.ts; });
      pos.innerHTML = '<optgroup label="🗩 Part of speech">';
      for (var i=0; i<json.length; i++) {
        pos.innerHTML += '<option value="'+_pos[json[i].ngram][0]+'">'+_pos[json[i].ngram][0]+' '+_pos[json[i].ngram][1]+'</option>';
      }
      pos.innerHTML += '</optgroup>';
      phrase.focus();
    }
  };
  xhttp.open("GET", url + "?a=parse&q=" + encodeURIComponent(q), true);
  xhttp.send();
}

function loadMorph() {
  if (word.value != "") {
    q = word.value.replace(/[^\w\s]/g, "").trim() + "_INF";
    _word.innerHTML = "";
    word.value = "";
    word.placeholder = "Searching...";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var json = JSON.parse("["+this.responseText.split(">[")[1].split("]<")[0]+"]");
        var r = "";
        for (var i=1; i<json.length; i++) {
          if (json[i].ngram.length > 0) {
            r += "<option>" + json[i].ngram + "</option>";
          }
        }
        _word.innerHTML = r;
        word.placeholder = "Click for results";
        word.focus();
      }
    };
    xhttp.open("GET", url + "?a=parse&q=" + encodeURIComponent(q), true);
    xhttp.send();
  }
}

function loadSpeech() {
  var q = "" + getQuery();
  var ipa = q.replace(/\w/g, "");
  if (ipa.search(ph_) != -1 || ipa.search(/[·ˈˌ]/) != -1) {
    speak(q); //ˌmænɪˈtoʊbə
  } else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementsByTagName('audio')[0].src = "data:audio/mp3;base64," + this.responseText;
        document.getElementsByTagName('audio')[0].load();
        document.getElementsByTagName('audio')[0].play();
      }
    };
    xhttp.open("GET", url + "?a=tts&accent=" + accent.value + "&q=" + encodeURIComponent(q), true);
    xhttp.send();
  }
}

function loadBasicWords(q) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ltwf_.document.open();
      ltwf_.document.write(this.responseText.replace("<head>", "<head><base href='https://learnthesewordsfirst.com/'/>"));
      ltwf_.document.close();
      ltwf.src = "#" + q.split(" ")[1];
    }
  };
  xhttp.open("GET", url + "?a=nsm&q=" + q.replace(" ", "_"), true);
  xhttp.send();
}


  function addTitles() {
    var lines = [];
    var titles = res.value.split("\n\n\n");
    var toc_index = "";
    for (var i=0; i<titles.length; i++) {
      lines[i] = res.value.substr(0,res.value.indexOf(titles[i])).split("\n").length-1;
      titles[i] = titles[i].substr(0,titles[i].indexOf("\n"));
      toc_index += "<option value='"+lines[i]+"'>"+titles[i]+"</option>";
    }
    toc.innerHTML = toc_index;
  }
  
  function download() {
    var data = "";
    if (window.frames['genre'].contentWindow.l === true) {
      gform = genre.contentWindow.location.search.slice(1).split('&').join('\n');
      data = decodeURIComponent(gform).replace(/\=/g, ": ").replace(/\+/g, " ").replace(/\n\n/g,"");
      var filename = "lyrics.txt";
      dl.setAttribute('href', 'data:text/plain;charset=utf-8,' + data + "\n\n" + res.value);
      dl.setAttribute('download', filename);
      dl.click();
    }
  }
  
  function upload() {
    if (!ul.files[0]) {
      ul.click();
    } else {
      var file    = ul.files[0];
      var reader  = new FileReader();
    
      reader.addEventListener("load", function () {
        var data = reader.result.slice(0, reader.result.indexOf("\n\n")).split("\n");
        for (var i=0; i<data.length; i++) {
          var ck = data[i].split(": ");
          field = window.frames['genre'].contentDocument.getElementsByName(ck[0]);
          if (field && field.length == 1) {
            field[0].value = ck[1].replace(/\+/g, " ");
          } else if (field.length > 1) {
            for (var j=0; j<field.length; j++) {
              if (field[j].value == ck[1]) {
                field[j].checked = true;
              }
            }
          }
        }
        var data = reader.result.slice(reader.result.indexOf("\n\n")+2);
        res.value = data;

        setCookies(false);
        setCookies(true);
        ul.value = null;
      }, false);
    
      if (file && file.name.slice(-4) == ".txt") {
        reader.readAsText(file);
      }
    }
  }
  
  function setCookies(g) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    
    if (g === true) {
      for (var i=0; i<gform.length; i++) {
        document.cookie = gform[i] + ";" + expires + ";path=/";
      }
    } else {
      document.cookie = "lyrics=" + encodeURIComponent(res.value) + ";" + expires + ";path=/";
    }
  }
  
  function getCookie() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split('; ');
    
    for (let i = 0; i < ca.length; i++) {
      let ck = ca[i].split("=");
      field = window.frames['genre'].contentDocument.getElementsByName(ck[0]);
      if (field && field.length == 1) {
        field[0].value = ck[1].replace(/\+/g, " ");
      } else if (field.length > 1) {
        for (var j=0; j<field.length; j++) {
          if (field[j].value == ck[1]) {
            field[j].checked = true;
          }
        }
      } else if (ck[0] == 'lyrics') {
        res.value = ck[1];
      }
    }
  }
  getCookie();

  res.addEventListener("keyup", function (event) {
    var cPos = findCursor(res).split(",");
    var b = parseInt(cPos[0]);
    var d = parseInt(cPos[1]);
    var ln = res.value.substr(0,b).split("\n").length-1;
    while (ln >= 27) { ln -= 27; }
    h = "";
    switch (ln) {
      case 0:
        h = "Title"
        break;
      case 1:
        h = "verse 1: opening image > theme stated > setup | catalyst (inciting incident)";
        break;
      case 2:
        h = "verse 1: catalyst (inciting incident) | opening image > theme stated > setup";
        break;
      case 3:
        h = "verse 1: debate (inciting incident)";
        break;
      case 4:
        h = "verse 1: break into II";
        break;
      case 5:
        h = "";
        break;
      case 6: case 7: case 8: case 9:
        h = "chorus: b story";
        break;
      case 10:
        h = "";
        break;
      case 11: case 12: case 13:
        h = "verse 2: premise (progressive complication) | crisis";
        break;
      case 14:
        h = "bridge: midpoint (turning point) | all is lost";
        break;
      case 15:
        h = "";
        break;
      case 16: case 17: case 18:
        h = "verse 3: crisis | premise (progressive complication)";
        break;
      case 19:
        h = "bridge: all is lost | midpoint (turning point)";
        break;
      case 20:
        h = "";
        break;
      case 21:
        h = "verse 4: break into III";
        break;
      case 22:
        h = "verse 4: finale (climax)";
        break;
      case 23:
        h = "verse 4: finale (resolution)";
        break;
      case 24:
        h = "verse 4: finale > final image";
        break;
      default:
        h = "";
    }
    res.setCustomValidity(h);
    if (h != "") { submit.click(); }
  });


function showGenre() {
  if (metadata.style.visibility!='visible') {
    metadata.style.visibility='visible';
  } else {
    metadata.style.visibility='hidden';
  }
}

function showLibrary() {
  if (library.style.visibility!='visible') {
    library.style.visibility='visible';
  } else {
    library.style.visibility='hidden';
  }
}

function showResources() {
  if (resources.style.visibility!='visible') {
    resources.style.visibility='visible';
  } else {
    resources.style.visibility='hidden';
    basic_words.style.visibility='hidden';
  }
}

function showCredits() {
  if (credits.style.visibility!='visible') {
    credits.style.visibility='visible';
  } else {
    credits.style.visibility='hidden';
  }
}

function showLinks() {
  if (links.style.width!='144px') {
    links.style.width='144px';
  } else {
    links.style.width='24px';
  }
}

function showTooltips() {
  if (mobile.style.visibility!='visible') {
    mobile.style.visibility='visible';
  } else {
    mobile.style.visibility='hidden';
  }
}

function showTrends() {
  if (trends_chart.style.visibility!='visible') {
    loadTrends("" + getQuery());
    trends_chart.style.visibility='visible';
  } else {
    trends_chart.style.visibility='hidden';
  }
}

function showWiki() {
  if (wiki_.style.visibility!='visible') {
    loadWiki();
    wiki_.style.visibility='visible';
  } else {
    wiki_.style.visibility='hidden';
  }
}

function showPhonemes() {
  if (dict.style.visibility!='hidden') {
    dict.style.visibility='hidden';
  } else {
    dict.style.visibility='visible';
  }
}

function showBasicWords() {
  if (nsm.style.visibility!='visible') {
    nsm.style.visibility='visible';
    basic_words.style.visibility='visible';
  } else {
    nsm.style.visibility='hidden';
    basic_words.style.visibility='hidden';
  }
}

function showPanel() {
  dict.style.visibility='hidden';
  window.frames['synth'].showPanel();
}
