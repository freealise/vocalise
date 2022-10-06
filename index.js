var v_ssml = ("iː ɪ eɪ ɛ æ ə ɚ ʌ ɑː ɔː oʊ ʊ uː aɪ aʊ ɔɪ").split(" ");
var c_ssml = ("p b t d k ɡ m n ŋ f v s z θ ð ʃ ʒ h l ɹ ʧ ʤ j w").split(" ");

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
  "b,B,0.2141",
  "p,P,0.2477",
  "d,D,0.5656",
  "t,T,0.9327",
  "ʤ,JH,0.0791",
  "ʧ,CH,0.0717",
  "ɡ,G,0.0920",
  "k,K,0.3811",
  "v,V,0.2394",
  "f,F,0.2387",
  "ð,DH,0.6531",
  "θ,TH,0.0758",
  "ʒ,ZH,0.0086",
  "ʃ,SH,0.1072",
  "z,Z,0.4163",
  "s,S,0.5710",
  "ɹ,R,0.5663",
  "h,HH,0.1739",
  "w,W,0.2890",
  "m,M,0.3173",
  "_,_,1",
  "n,N,1.0000",
  "ŋ,NG,0.1000",
  "l,L,0.4471",
  "j,Y,0.0911",
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
var stress = (" –=≡≣").split("");

var tone = [ '꜌', '꜑', '꜋', '꜐', '꜊', '꜏', '꜉', '꜎', '꜈', '꜍', 'ᣟ𝍩', '𝍩ᣟ' ]; //ᐧ
var tone_chart = [ '˩', '˨', '˧', '˦', '˥', '꜖', '꜕', '꜔', '꜓', '꜒' ];
//https://en.wikipedia.org/wiki/Tone_letter
//https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
//https://en.wikipedia.org/wiki/Counting_Rod_Numerals_(Unicode_block)

var colors = [0,1,0,1,0,0,1,0,1,0,1,0,0];

function playAudio() {
  document.getElementsByTagName('audio')[0].play();
}

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

*/

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
var corpus = document.getElementById("corpus");
var languages = document.getElementById("languages");
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
var res_old = "";
var regexp = [];
var ks_ = [];
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
var notes_ = new RegExp("[^("+tone.join("|")+"| )]", "g");
var stress_ = new RegExp("("+stress.join("|")+")", "g");
var ph_ = new RegExp("("+v_ssml.join("|")+"|"+c_ssml.join("|")+")", "g");
var _v = new RegExp("("+v_ssml.join("|")+")", "g");
var _c = new RegExp("("+c_ssml.join("|")+")", "g");

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
  regexp[i][0] = new RegExp("("+ks_[i]+"[_·ˈˌ]*|"+superscript[ks_[i]]+"[ˊ`]*)", "g");
  regexp[i][1] = "hsl(" + ks[2] + ", 100%, 75%)";
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
}

for (var i=0; i<tone.length; i++) {
  var ks = tone[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);copySymbols();' style='color:rgba(0,0,0,"+(colors[i]*0.75+0.25)+");'>"+ks+"</a> ";
}
tone_.innerHTML += "<br/> &nbsp;";
for (var i=1; i<stress.length; i++) {
  var ks = stress[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);'>"+ks+"</a> ";
}

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
  if (ctl == res) {res_old = res.value;}
  //t.innerHTML += "<span style='background-color:" + clr + ";'>" + v + "</span> ";
  var cPos = findCursor(ctl).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  ctl.value = ctl.value.substr(0, b) + p + ctl.value.substr(d);
  ctl.setSelectionRange(b+p.length, b+p.length);
  ctl.focus();
}

function findWords() {
  //https://developers.google.com/chart/interactive/docs/querylanguage#where
  var query = null;
  if (word.value != "" && word.value.trim().search(/[_·ˈˌ ]/) != -1) {
    var w_ = word.value.replace(/\s+/g, " ").replace(/_/g, "[^ ]+").replace(/\*/g, ".*").trim();
    query = "select A, D where A matches '" + w_ + "'";
  } else if (vowels.value != "" || consonants.value != "") {
    if (vowels.value != "") {
      var q = vowels.value.replace(/[_·ˈˌ]/g, function(x){return x+" ";}).replace(/\s+/g, " ").replace(/_/g, "[^ ]+").replace(/\*/g, ".*").trim();
    } else {
      var q = ".*";
    }
    if (consonants.value != "") {
      var q_ = consonants.value.split("").join(" ").replace(/\s+/g, " ").replace(/_/g, "[^ ]").replace(/\*/g, ".*").trim();
    } else {
      var q_ = ".*";
    }
    query = "select A, D where B matches '" + q + "' and C matches '" + q_ + "'";
  }
  if (query != null) {
    word.value = "";
    word.placeholder = "Searching...";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText != "") {
          var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/"\n"/g, "</option><option value='");
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
    if (lines[j+1] && lines[j].search(/\w/) != -1 && lines[j+1].search(ph_) != -1) {
      lines[j] = "<div class='ipa'>" + lines[j];
    }
    if (lines[j-1] && lines[j].search(ph_) != -1 && lines[j-1].search(/\w/) != -1) {
      if (lines[j+1] && lines[j+1].search(stress_) != -1) {
        lines[j+1] = lines[j+1] + "</div>";
      } else {
        lines[j] = lines[j] + "</div>";
      }
    }
    if (lines[j].search(_r) != -1) {
      for (var i=0; i<regexp.length; i++) {
        lines[j] = lines[j].replace(regexp[i][0], function (x) {
            return "<i style='border-bottom:4px solid " + regexp[i][1] + ";'>"+x+"</i>";
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
    word.blur();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/"\n"/g, "</option><option value='");
        _word.innerHTML = "<option value='" + r + "</option>";
      	r = null;
      	a_c = false;
      	word.focus();
      }
    };
    var query = "select A, D where D contains '" + txt + "'";
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
  var b_ = res.value.substr(0, d).replace(/[\.\?\!]/g, function(x){return x+"+";}).split("+");
  var wrd = b_[b_.length-2].trim();
  var b = res.value.indexOf(wrd);
  res.value = res.value.substr(0, b) + "…\n" + res.value.substr(b);
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
      console.log(wrd);
      
      if (o == "") {
        if (tl_ == sl && sl_ != sl) {
          phrase.value = wrd;
        }
      } else if (tl_ == tl[1]) {
        loadTranslation(wrd, o, tl[1], tl[0]);
      } else if (tl_ == tl[0]) {
        if (wrd == o) {
          hl.innerHTML = hl.innerHTML.replace("…\n", "");
          res.value = res.value.replace("…\n", "");
        } else {
          hl.innerHTML = hl.innerHTML.replace("…\n", "<sup>"+wrd+"</sup>\n");
          res.value = res.value.replace("…\n", "\n");
        }
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
  trends_chart.innerHTML = '<iframe id="chart" src="data:text/html,' + encodeURIComponent('<html><head></head><body><style>#trends-widget-1{width:100%;height:320px;margin-top:-80px;}</style><script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/3045_RC01/embed_loader.js"></script><script type="text/javascript">trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":['+json+'],"category":0,"property":""}, {"exploreQuery":"date=all&q='+q.replace(/ /g, '%20')+'","guestPath":"https://trends.google.com:443/trends/embed/"});</script></body></html>') + '"></iframe>';
}


function loadLibrary(artist, song) {
  library_iframe.innerHTML = '<iframe id="musixmatch" src="https://www.musixmatch.com/lyrics/'+artist.replace(/ /g, '-')+'/'+song.replace(/ /g, '-')+'/embed?theme=light" width="310" height="210" border="0"></iframe>';
}


function loadWiki() {
  var q = "" + selectText();
  q = q.replace(/ /g, '_').toLowerCase();
  wiki_.innerHTML = "<iframe id='wiki' src='https://en.m.wikipedia.org/wiki/"+q+"' width='100%' height='256' border='0'/>";
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

function copySymbols() {
  var notes = ctl.value.replace(/\s+\w/g, "").replace(/\w\s+/g, "").replace(notes_, "").replace(note_, function(x){ return tone.indexOf(x)+","; }).replace(/\s/g, "-1,").slice(0,-1).split(",");
  for (var i=0; i<notes.length; i++) {
    if (notes[i] != -1) {
      var k = window.frames['synth'].k;
      window.frames['synth'].p[i].innerText = k.substr(0, notes[i]) + "█" + k.substr(notes[i]+1);
    } else {
      window.frames['synth'].p[i].innerText = k;
    }
  }
  var letters = ctl.value.replace(note_, "").replace(/[^\w\s\.\,\!\?\-]/g, "").replace(/\s+/g, " ");
  var scroll = window.frames['synth'].scroll.value.replace(/[^\n]/g, "\n");
  window.frames['synth'].scroll.value = letters + scroll.slice(letters.length);
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
    loadTrends("" + selectText());
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

function showPanel() {
  dict.style.visibility='hidden';
  window.frames['synth'].showPanel();
}
