var hex = (
  "䷀䷫䷌䷠䷉䷅䷘䷋" +
  "䷈䷸䷤䷴䷼䷺䷩䷓" +
  "䷍䷱䷝䷷䷥䷿䷔䷢" +
  "䷙䷑䷕䷳䷨䷃䷚䷖" +
  "䷪䷛䷰䷞䷹䷮䷐䷬" +
  "䷄䷯䷾䷦䷻䷜䷂䷇" +
  "䷡䷟䷶䷽䷵䷧䷲䷏" +
  "䷊䷭䷣䷎䷒䷆䷗䷁"
).split("");

var phonemes =
"䷀䷀䷀䷀䷀䷀䷀䷀䷀䷀䷀䷫ ䷡䷡䷁䷁䷟䷟䷁䷁ ䷀䷌ ䷀䷫䷫䷫䷀䷫ ䷁䷁ ䷁䷁䷡䷡䷌䷫" + "\n" +
"䷫䷠䷌䷘䷉䷼䷈䷙䷍䷡䷪䷪ ䷀䷫䷀䷫䷼䷺䷗䷁ ䷋䷾ ䷠䷷䷿䷑䷽䷛ ䷡䷟ ䷗䷁䷀䷫䷾䷑";

/*
uuooaaeaeeii sztdszfv rh wmnnly cj pbtdkg
: : : re : :   hhhh         g   hh
*/

var phonemes_ = phonemes.split("\n");
for (var i=0; i<phonemes_.length; i++) {
  phonemes_[i] = phonemes_[i].split("");
}

var keys = [
  " i;IY;330;0.1664;0.3341;0.1498;0.0153;11",
  " ɪ;IH;300;0.3084;0.5288;0.3583;0.0380;10",
  "eɪ;EY;270;0.0699;0.0026;0.1882;0.0188;9",
  " ɛ;EH;240;0.1077;0.0145;0.2819;0.0266;8",
  " æ;AE;210;0.1024;0.0084;0.2871;0.0118;7",
  " ə;ER;180;0.1080;0.2535;0.0684;0.0021;6",
  " ʌ;AH;150;0.4567;1.0000;0.3641;0.0060;5",
  " ɑ;AA;120;0.0612;0.0046;0.1674;0.0115;4",
  " ɔ;AO;90;0.0557;0.0048;0.1554;0.0070;3",
  "oʊ;OW;60;0.0371;0.0182;0.0857;0.0075;2",
  " ʊ;UH;30;0.0112;0.0008;0.0310;0.0018;1",
  " u;UW;0;0.0605;0.0202;0.1523;0.0089;0",
  "aɪ;AY;210;0.0483;0.0066;0.1246;0.0138;0",
  "ɔɪ;OY;180;0.0034;0.0001;0.0098;0.0004;0",
  "aʊ;AW;90;0.0156;0.0006;0.0442;0.0021;0",
  //"__;__;0;0.0000;0.0000;0.0000;0.0000;0",
];

var keys_ = [
  "b,B,0.2141,36",
  "p,P,0.2477,35",
  "d,D,0.5656,38",
  "t,T,0.9327,37",
  "ʤ,JH,0.0791,33",
  "ʧ,CH,0.0717,32",
  "ɡ,G,0.0920,40",
  "k,K,0.3811,39",
  "v,V,0.2394,20",
  "f,F,0.2387,19",
  "ð,DH,0.6531,16",
  "θ,TH,0.0758,15",
  "ʒ,ZH,0.0086,18",
  "ʃ,SH,0.1072,17",
  "z,Z,0.4163,14",
  "s,S,0.5710,13",
  "ɹ,R,0.5663,24",
  "h,HH,0.1739,30",
  "w,W,0.2890,22",
  "m,M,0.3173,27",
  "_,_,1",
  "l,L,0.4471,25",
  "n,N,1.0000,28",
  "j,Y,0.0911,23",
  "ŋ,NG,0.1000,29",
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

var tone = [ '꜌', '꜋', '꜊', '꜉', '꜈', 'ˊ', '꜑', '꜐', '꜏', '꜎', '꜍', '`' ];
//             '_', '˩', '˨', '˧', '˦', '˥', '꜖', '꜕', '꜔', '꜓', '꜒'];
//https://en.wikipedia.org/wiki/Tone_letter
var colors = [0,1,0,1,0,0,1,0,1,0,1,0,0];

var hex = (
  "䷀䷫䷌䷠䷉䷅䷘䷋" +
  "䷈䷸䷤䷴䷼䷺䷩䷓" +
  "䷍䷱䷝䷷䷥䷿䷔䷢" +
  "䷙䷑䷕䷳䷨䷃䷚䷖" +
  "䷪䷛䷰䷞䷹䷮䷐䷬" +
  "䷄䷯䷾䷦䷻䷜䷂䷇" +
  "䷡䷟䷶䷽䷵䷧䷲䷏" +
  "䷊䷭䷣䷎䷒䷆䷗䷁"
).split("");

var phonemes =
"䷀䷀䷀䷀䷀䷀䷀䷀䷀䷀䷀䷫ ䷡䷡䷟䷟䷁䷁䷁䷁ ䷀䷫䷀䷀ ䷫䷫䷫䷌ ䷁䷁ ䷁䷁䷡䷡䷌䷫" + "\n" +
"䷫䷠䷌䷘䷉䷼䷈䷙䷍䷡䷪䷪ ䷀䷫䷼䷺䷀䷫䷗䷁ ䷠䷛䷋䷽ ䷷䷿䷑䷾ ䷡䷟ ䷗䷁䷀䷫䷾䷑";

/*
uuooaaeaeeii sztdszfv wyrl mnnh cj pbtdkg
: : : re : :   hhhh          g  hh
*/

var phonemes_ = phonemes.split("\n");
for (var i=0; i<phonemes_.length; i++) {
  phonemes_[i] = phonemes_[i].split("");
}

var keysPressed = new Array(12);
var kbrd = {
  '1': 11,
  '2': 10,
  '3': 9,
  '4': 8,
  '5': 7,
  '6': 6,
  '7': 5,
  '8': 4,
  '9': 3,
  '0': 2,
  '-': 1,
  '=': 0,
}
for (var i=0; i<keysPressed.length; i++) {
  keysPressed[i] = false;
}

var h_ = 2048;
var real = new Float32Array(h_);
var imag = new Float32Array(h_);
var fund = 128;
var freq = 4.0; //max.freq is 4*2048=8192 Hz
var offset = fund / freq;
var formant_w = Math.round(512 / freq);
var vol = 1.0;
var ac = null;
var osc, gain, osc_, gain_;
var i_, _i, t;
var a_ = [];
var playNow = false;
var h = 12;

function init() {
  ac = new AudioContext({latencyHint:"interactive",sampleRate: 48000});
  osc = ac.createOscillator();
  osc.frequency.setValueAtTime(freq, ac.currentTime); // value in hertz
  gain = ac.createGain();
  gain.gain.setValueAtTime(0, ac.currentTime);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start();
  osc_ = ac.createOscillator();
  osc_.frequency.setValueAtTime(freq, ac.currentTime); // value in hertz
  gain_ = ac.createGain();
  gain_.gain.setValueAtTime(0, ac.currentTime);
  osc_.connect(gain_);
  gain_.connect(ac.destination);
  osc_.start();
  i_ = 0;
  _i = 0;
}

function play() {
  var ph = a_[i_].split("").reverse();
  var n = a_[i_].replace(/0/g, "").length;
  for (var i=0; i<offset; i++) {
    real[i] = 0;
    imag[i] = 0;
  }
  for (var j=0; j<ph.length; j++) {
    if (ph[0]=="1" || n<=2) {
      if (ph[j]=="1") {
        for (var i=j*formant_w+offset; i<(j+1)*formant_w+offset; i++) {
          if (parseInt(i/offset) == i/offset) {
            real[i] = vol;
          	imag[i] = vol;
          } else {
            real[i] = 0;
        	  imag[i] = 0;
          }
        }
      } else {
        for (var i=j*formant_w+offset; i<(j+1)*formant_w+offset; i++) {
          real[i] = 0;
        	imag[i] = 0;
        }
      }
    } else {
      if (ph[j]=="1") {
        for (var i=j*formant_w+offset; i<(j+1)*formant_w+offset; i++) {
        	real[i] = Math.random()*vol;
        	imag[i] = Math.random()*vol;
        }
      } else {
        for (var i=j*formant_w+offset; i<(j+1)*formant_w+offset; i++) {
          real[i] = 0;
        	imag[i] = 0;
        }
      }
    }
  }
  var wave = ac.createPeriodicWave(real, imag, {disableNormalization: true});
  if (parseInt(i_/2) == i_/2) {
    gain.gain.value = 0.0;
    osc.setPeriodicWave(wave);
    gain.gain.linearRampToValueAtTime(1.0, ac.currentTime+1.0 / freq);
    gain_.gain.linearRampToValueAtTime(0.0, ac.currentTime+1.0 / freq);
  } else {
    gain_.gain.value = 0.0;
    osc_.setPeriodicWave(wave);
    if (a_[i_-1].indexOf("1")>-1) {
      gain_.gain.linearRampToValueAtTime(1.0, ac.currentTime+1.0 / freq);
      gain.gain.linearRampToValueAtTime(0.0, ac.currentTime+1.0 / freq);
    } else {
      gain_.gain.linearRampToValueAtTime(1.0, ac.currentTime);
      gain_.gain.linearRampToValueAtTime(0.0, ac.currentTime+0.5 / freq);
      gain.gain.linearRampToValueAtTime(0.0, ac.currentTime);
    }
  }
  i_++;
  if (i_ < _i) {
    if (parseInt(i_/2) == i_/2) {
      b.focus();
      b.setSelectionRange(i_/2, i_/2);
    }
    t = setTimeout(play, 1000 / freq);
  } else {
    pause();
  }
}

function toBinary(v) {
  var a = v.split("\n");
  a_ = [];
  for (var i=0; i<a.length; i++) {
    a[i] = a[i].split("");
    for (var j=0; j<a[i].length; j++) {
      if (!a_[j*2]) {
        a_[j*2] = "";
        a_[j*2+1] = "";
      }
      var b_ = hex.indexOf(a[i][j]).toString(2);
      while (b_.length<6) {
        b_ = "0" + b_;
      }
      a_[j*2] += b_;
      a_[j*2+1] += "";
    }
  }
  for (var i=0; i<a_.length; i++) {
    while (a_[i].length<12) {
      a_[i] = "0" + a_[i];
    }
  }
  console.log(a_.join("\n"));
}

function showColumn() {
  var b_ = parseInt(b.selectionStart);
  var d_ = parseInt(b.selectionEnd);
  var ch_ = b.value.charAt(b_-1);
  ch.innerHTML = ch_;
  var c = hex.indexOf(ch_);
  if (c == -1) {
    c = 0;
  }
  var p = c.toString(2);
  while (p.length < cb.length) {
    p = "0" + p;
  }
  for (var i=0; i<p.length; i++) {
    if (p.charAt(i) == "1") {
      cb[i].checked = true;
    } else {
      cb[i].checked = false;
    }
  }
}

function addColumn() {
  b_old = b.value;
  var b_ = parseInt(b.selectionStart);
  var d_ = parseInt(b.selectionEnd);
  var l = b.value.substr(0, b_).split("\n");
  var c = l[l.length-1].length; //distance from the left
  
  var a = b.value.split("\n");
  for (var i=0; i<phonemes_.length; i++) {
    a[i] = a[i].substr(0, c) + phonemes_[i][i_/2] + a[i].substr(c+1);
  }
  b.value = a.join("\n");
  
  b.focus();
  b.setSelectionRange(c, c);
  var ch_ = b.value.charAt(b_-1);
  ch.innerHTML = ch_;
}

function playPhoneme(p) {
  i_ = p*2;
  _i = i_+2;
  toBinary(phonemes);
  if (ctl==b) {
    addColumn();
  }
  if (a_[i_]) {
    if(ac==null){init();}
    play();
  }
}

function playColumn() {
  i_ = (findC(b)-1)*2;
  _i = i_+2;
  toBinary(b.value);
  if (a_[i_]) {
    play();
  }
}

function playAll() {
  i_ = (findC(b)-1)*2;
  _i = a_.length;
  toBinary(b.value);
  if (a_[0]) {
    play();
  }
  playNow = true;
  document.getElementById("play_all").firstChild.innerText='pause';
}

function pause() {
  clearTimeout(t);
  gain_.gain.linearRampToValueAtTime(0.0, ac.currentTime+1.0 / freq);
  gain.gain.linearRampToValueAtTime(0.0, ac.currentTime+1.0 / freq);
  playNow = false;
  document.getElementById("play_all").firstChild.innerText='play_arrow';
}

function findC(v) {
    var b_ = parseInt(v.selectionStart);
    var d_ = parseInt(v.selectionEnd);
    var l = v.value.substr(0, b_).split("\n");
    var c = l[l.length-1].length;
    v.focus();
    v.setSelectionRange(b_, d_);
    return c;
}

function addBinary() {
  b_old = b.value;
  var b_ = parseInt(b.selectionStart);
  var d_ = parseInt(b.selectionEnd);
  var p = "";
  for (var i=0; i<keysPressed.length; i++) {
    if (keysPressed[i]===true) {
      p += "1";
    } else {
      p += "0";
    }
  }
  if (p=="000000000000") {
    p = "";
    for (var i=0; i<cb.length; i++) {
      if (cb[i].checked === true) {
        p += "1";
      } else {
        p += "0";
      }
    }
  } else {
    for (var i=0; i<cb.length; i++) {
      if (p.charAt(i)=="1") {
        cb[i].checked = true;
      } else {
        cb[i].checked = false;
      }
    }
  }
  var i = parseInt(p.substr(0, 6), 2);
  if (b.value.charAt(b_-1) && b.value.charAt(b_-1) != "\n") {
    b.value = b.value.substr(0, b_-1) + hex[i] + b.value.substr(d_);
  } else {
    b.value = b.value.substr(0, b_) + hex[i] + b.value.substr(d_);
  }
  b.focus();
  b.setSelectionRange(b_, b_);
  var ch_ = b.value.charAt(b_-1);
  ch.innerHTML = ch_;
  playColumn();
}

function zoom(v) {
  var z = parseInt(b.style.fontSize.slice(0,-2)) + v;
  b.style.fontSize = z+"px";
}

function swap() {
  if (checkboxes.style.left=="0px") {
    checkboxes.style.right="0px";
    checkboxes.style.left="auto";
    b.style.textAlign="left";
    buttons.style.textAlign="left";
  } else {
    checkboxes.style.right="auto";
    checkboxes.style.left="0px";
    b.style.textAlign="right";
    buttons.style.textAlign="right";
  }
}

function save() {
    var filename = "formants.txt";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(b.value));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

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

google.charts.load('current', {packages:["orgchart"]});

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
var word_ = document.getElementById("word_");
var highlight = document.getElementById("highlight");
var sidebar = document.getElementById("sidebar");
var translations = document.getElementById("translations");
var dict = document.getElementById("dict");
var res = document.getElementById("res");
var phrase = document.getElementById("phrase");
var ngram = document.getElementById("ngram");
var corpus = document.getElementById("corpus");
var chart_ = document.getElementById("chart_");
var translation = document.getElementById("translation");
var translation_ = document.getElementById("translation_");
var languages = null; //document.getElementById("languages");
var it = null;
var pos = document.getElementById("pos");
var pos_ = document.getElementById("pos_");
var syntax = document.getElementById("syntax");
var syntax_chart = document.getElementById("syntax_chart");
var spellcheck = document.getElementById("spellcheck");
var examples = document.getElementById("examples");
var wiki = document.getElementById("wiki");
var mobile = document.getElementById("mobile");
var spectrogram = document.getElementById("spectrogram");
var b = document.getElementById("b");
var buttons = document.getElementById("buttons");
var checkboxes = document.getElementById("checkboxes");
var cb = document.getElementsByClassName("cb");
var ch = document.getElementById("ch");
var orig_link = document.getElementById("orig_link");
var res_old = "";
var b_old = "";
var regexp = [];
var ks_ = [];
var ctl = res;
var ln = 20;
var wn = 0;
var tl = ["en", "nl"]; //fy, af
var sl = "en";
var orig, corr;
var a_c = false;

b.style.fontSize = "56px";
b.value = "䷀\n䷀";
b.setSelectionRange(2, 2);
var r_ = new RegExp("("+Object.keys(superscript).join("|")+")", "g");

for (var i=0; i<keys.length; i++) {
  var ks = keys[i].split(";");
  var lnk = v[i];
  lnk.id = i;
  ks_[i] = ks[0].trim();
  lnk.title = ks_[i];
  phoneme[i] = ks[7];
  lnk.onfocus = function(e){this.selectedIndex=-1;};
  lnk.onblur = function(e){this.selectedIndex=0;};
  lnk.onchange = function(e){if(ctl!=consonants && ctl!=b){addPhoneme(e.target.value, e.target.style.backgroundColor);}playPhoneme(parseInt(phoneme[this.id]));this.blur();};
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
  phoneme[keys.length+i] = ks[3];
  lnk.onclick=function(e){if(ctl!=vowels && ctl!=b){addPhoneme(e.target.title, 'transparent');}playPhoneme(parseInt(phoneme[this.id]));};
  lnk.href="javascript:";
  lnk.innerText = ks[0] + " ";
  lnk.title = ks[0];
  var bg = 100 - Math.pow(parseFloat(ks[2]), 1/3)*100;
  lnk.style.color = "hsl(0, 0%, " + bg + "%)";
}

for (var i=0; i<tone.length; i++) {
  var ks = tone[i];
  tone_.innerHTML += "<a title='"+ks+"' href='javascript:' onclick='addPhoneme(this.title);' style='color:rgba(0,0,0,"+(colors[i]*0.75+0.25)+");'>"+ks+"</a> ";
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
    phrase.focus();
    phrase.setSelectionRange(d+w_.length+1, d+w_.length+1);
    word_.firstChild.innerText = w_.split(' ')[0];
  }
  word.value = _w;
}

function addPhoneme(p, clr) {
  //t.innerHTML += "<span style='background-color:" + clr + ";'>" + v + "</span> ";
  var cPos = findCursor(ctl).split(",");
  var b = parseInt(cPos[0]);
  var d = parseInt(cPos[1]);
  ctl.value = ctl.value.substr(0, b) + p + ctl.value.substr(d);
  ctl.focus();
  ctl.setSelectionRange(b+p.length, b+p.length);
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
    word_.innerHTML = "<div>Searching...</div>";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText != "") {
          var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/"\n"/g, "</li><li title='");
          word_.innerHTML = "<div onclick='showList();'>=> Results</div><ul><li title='" + r + "</li></ul>";
          r = null;
        } else {
          word_.innerHTML = "<div>!= Nothing found</div>";
        }
        word_.focus();
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
  
  if (ln.search(/\w/gi) >= 0 && ln.search(/[ˊ`_·ˈˌ]/g) == -1) {
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
  res_old = res.value;
  var str = res.value;
  var lines = str.split("\n");
  str = "";
  for (var j=0; j<lines.length; j++) {
    if (lines[j].search(/[ˊ`_·ˈˌ]/g) != -1) {
      for (var i=0; i<regexp.length; i++) {
        lines[j] = lines[j].replace(regexp[i][0], function (x) {
            return "<i style='border-bottom:4px solid " + regexp[i][1] + ";'>"+x+"</i>";
        });
      }
      var k = Object.keys(superscript);
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
    highlightText();
  } else if (ctl == b) {
    b.value = b_old;
  }
}

function loadDefinition(w_) {
  translations.style.visibility='visible';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "") {
        var json = JSON.parse(this.responseText)[0];
        translation.innerHTML = "<b>" + json.word + "</b><i class='material-icons notranslate'>volume_up</i> ";
        for (var i=0; i<json.phonetics.length; i++) {
          translation.innerHTML += "<audio><source src='"+json.phonetics[i].audio+"' type='audio/mpeg'></audio><a href='javascript:playAudio();'>" + json.phonetics[i].text + "</a> ";
        }
        for (var i=0; i<json.meanings.length; i++) {
          translation.innerHTML += "<hr/><b>" + json.meanings[i].partOfSpeech + "</b>";
          for (var j=0; j<json.meanings[i].definitions.length; j++) {
            translation.innerHTML += "<br/><br/>" + json.meanings[i].definitions[j].definition + "<br/>";
            for (var k=0; k<json.meanings[i].definitions[j].synonyms.length; k++) {
              translation.innerHTML += "<i><u><a href='javascript:' onclick='word.value=this.innerText;'>" + json.meanings[i].definitions[j].synonyms[k] + "</a></u></i> ";
            }
          }
        }
      } else {
        translation.innerHTML = "Unknown word";
      }
    }
  };
  xhttp.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + w_, true);
  xhttp.send();
}


function loadInflections(txt) {
  var tl_ = corpus.options[corpus.selectedIndex].value;
  ngram.innerHTML = "<option>Loading...</option>";
  var txt_ = txt.split('_')[0].split(' ');
  txt = txt_[txt_.length-1];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ngram.innerHTML = this.responseText;
      ngram.disabled=false;
    }
  };
  xhttp.open("GET", url + "?a=phrases&w=" + txt + "_INF&tl=" + tl_, true);
  xhttp.send();
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


function loadWords() {
  word_.innerHTML = "<div>Loading...</div>";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var r = this.responseText.slice(1,-1).replace(/","/g, "'>").replace(/"\n"/g, "</li><li title='").replace(/>\w+ /g, " class='d'>");
      word_.innerHTML = "<div onclick='showList();'><i class='material-icons notranslate'>bookmark_border</i>&nbsp;Dictionary</div><hr size='2' width='"+(wn/ln)+"'><ul><li title='' onclick='if(wn>0){wn-=ln;loadWords();}'>…</li><li title='" + r + "</li><li title='' onclick='wn+=ln;loadWords();'>…</li></ul>";
      words_ = this.responseText.replace(/".+",/g, "").replace(/".+\s\d"\n?/g, "").replace(/"/g, "").split("\n");
    }
  };
  var query = "select A, D limit " + ln + " offset " + wn;
  xhttp.open("GET", base + gid + "&tq=" + encodeURIComponent(query), true);
  xhttp.send();
}

function loadLanguages() {
  /*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      languages.innerHTML = this.responseText;
  */
    if (languages.options.length > 0) {
      for (var i=0; i<languages.options.length; i++) {
        if (navigator.language.indexOf(languages.options[i].value) >= 0 && navigator.language.indexOf(tl[0]) == -1) {
        		languages.options[i].selected = true;
        		sl = languages.options[i].value;
        } else if (languages.options[i].value.indexOf(sl) >= 0) {
            languages.options[i].selected = true;
        }
      }
      clearInterval(it);
    }
  /*
    }
  };
  xhttp.open("GET", url + "?a=languages&tl=" + navigator.language, true);
  xhttp.send();
  */
}


function loadTranslations(wrd) {
  if (sl != tl[0]) {
    translation.innerHTML = "Translating...";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var r = this.responseText.split("\n");
        if (r[0]) {
          translation.innerHTML = r[0];
          ngram.innerHTML = "<option>" + r[1].replace(/,/g, "</option><option>") + "</option>";
          ngram.disabled=false;
        } else {
          translation.innerHTML = "";
          loadTranslation(wrd);
        }
      }
    };
    xhttp.open("GET", url + "?a=translate&w=" + wrd + "&tl=" + sl + "&sl=" + tl[0], true);
    xhttp.send();
  } else {
    loadDefinition(wrd);
    return wrd;
  }
  chart_.innerHTML = '<iframe id="chart_iframe" src="https://books.google.com/ngrams/interactive_chart?content='+wrd+'_*&year_start=1500&year_end=2019&corpus=26&smoothing=0&case_insensitive=" width="100%" height="128" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no></iframe><br/><a href="https://books.google.com/ngrams/graph?content='+wrd+'_*&year_start=1500&year_end=2019&corpus=26&smoothing=0&case_insensitive=" target="_blank"><i class="material-icons notranslate">fullscreen</i></a>';
}


function loadTranslation(wrd) {
  if (sl != tl[0]) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        translation_.innerHTML = this.responseText + "<br/>";
      }
    };
    xhttp.open("GET", url + "?a=translate_beta&w=" + wrd.replace(/ /g, "+") + "&tl=" + sl + "&sl=" + tl[0], true);
    xhttp.send();
  } else {
    return wrd;
  }
}


function getSentence() {
  var d = findCursor(res).split(',')[1];
  var b_ = res.value.substr(0, d).replace(/[\.\?\!]/g, function(x){return x+"+";}).split("+");
  var wrd = b_[b_.length-2].trim();
  var b = res.value.indexOf(wrd);
  res.value = res.value.substr(0, b) + "…\n" + res.value.substr(b);
  colorPhonemes();
  syntax_chart.innerHTML = "Checking...";
  var wrd_ = wrd.replace(/\n\W*\n/g, "\n").replace(/\n/g, " ").replace(/[\,\"\'\-\:\;]/g, "").replace(/\?/g, " \?").replace(/[\!\.]/, function(x){return " "+x;}).split(" ");
  loadPunctuation(wrd_, 0, wrd);
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
      if (this.responseText == o) {
        hl.innerHTML = hl.innerHTML.replace("…\n", "");
        res.value = res.value.replace("…\n", "");
      } else {
        hl.innerHTML = hl.innerHTML.replace("…\n", "<sup>"+this.responseText+"</sup>\n");
        res.value = res.value.replace("…\n", "\n");
      }
      loadTranslation(o.replace(/\?/g, '%3F').replace(/\!/g, '%21'));
      loadSyntaxTree(this.responseText);
      
      spellcheck.innerText = "spellcheck";
      orig = null;
      corr = null;
      loadSyntaxPopularity(wrd);
      loadSyntaxPopularity(this.responseText);
    }
  };
  xhttp.open("GET", url + "?a=correct&w=" + wrd.replace(/ /g, "+") + "&tl=" + tl[0] + "&sl=" + tl[1], true);
  xhttp.send();
}


function loadSyntaxTree(wrd) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var r = this.responseText.split("\n");
      r[0] = r[0].replace(/\[{"/g, "<option>&nbsp;").replace(/"},{"/g, "</option>\n<option>&nbsp;").replace(/\w+":"\w+/g, function(x){var y=x.split('":"');return y[1]+' '+y[0];}).replace(/","/g, "</option><option>").replace(/"}\]/g, "</option>").split("\n");
      r[1] = r[1].split(" ");
      r[2] = r[2].split(" ");
      var tree = [[]];
      var wrd_ = wrd.trim().replace(/[^\w\s]/g, function(x){return " "+x;}).replace(/\s+/g, " ").split(" ");
      for (var i=0; i<r[0].length*2; i+=2) {
        tree[i] = [{'v':''+i, 'f':'<select onfocus="this.selectedIndex=-1" onblur="this.selectedIndex=0" onchange="loadWiki(this.options[this.selectedIndex].innerText);this.blur();"><optgroup label="'+r[2][i/2]+'">'+r[0][i/2]+'</optgroup></select>'}, ''+r[1][i/2]*2, ''+i];
        var j = i+1;
        tree[j] = [{'v':''+j, 'f':'<b>'+wrd_[i/2]+'</b>'}, ''+i, ''+j];
      }
      syntax_chart.innerHTML = "";
      drawChart(tree);
    }
  };
  xhttp.open("GET", url + "?a=syntax&w=" + wrd.replace(/ /g, "+") + "&tl=" + tl[0] + "&tl_=&c=1", true);
  xhttp.send();
}


      function drawChart(tree) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Index');
        data.addColumn('string', 'Root');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows(tree);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('syntax_chart'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {'allowHtml':true, 'allowCollapse':true, 'size':'small', 'nodeClass':'tree', 'selectedNodeClass':'tree_selected'});
      }
      
      
function loadSyntaxPopularity(wrd) {
  var tl_ = corpus.options[corpus.selectedIndex].value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var r = this.responseText.split(",");
      if (!orig) {
        orig = r;
      } else {
        corr = r;
      }
      if (orig && corr) {
        if (orig.length < corr.length) {
          for (var i=orig.length; i<corr.length; i++) {
            orig[i] = 1.0;
          }
        } else if (corr.length < orig.length) {
          for (var i=corr.length; i<orig.length; i++) {
            corr[i] = 1.0;
          }
        }
        var avg = 0;
        for (var i=0; i<corr.length; i++) {
          avg += parseFloat(corr[i]) - parseFloat(orig[i]);
        }
        avg = avg / corr.length;
        if (avg > 0) {
          spellcheck.innerText = "cancel";
        } else if (avg < 0) {
          spellcheck.innerText = "flaky";
        } else {
          spellcheck.innerText = "task_alt";
        }
      }
    }
  };
  xhttp.open("GET", url + "?a=syntax&w=" + wrd.replace(/ /g, "+") + "&tl=" + tl[0] + "&tl_=" + tl_ + "&c=0", true);
  xhttp.send();
}


function loadPhrases() {
  var wrd = phrase.value;
  var tl_ = corpus.options[corpus.selectedIndex].value;
  ngram.innerHTML = "<option>Searching...</option>";
  for (var i=0; i<pos_.options.length; i++) {
    var r = new RegExp("\\"+pos_.options[i].value, "g");
    wrd = wrd.replace(r, pos_.options[i].className);
  }
  wrd = wrd.replace(/__/g, "_ _").replace(/\S_\w+_/g, function(x){return x.slice(0,-1);}).replace(/_\w+_/g, function(x){return "*"+x.slice(0,-1);}).replace(/\s/g, "+").replace(/,/g, "%2C").replace(/\*/g, "%2A");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ngram.innerHTML = this.responseText;
      ngram.disabled=false;
    }
  };
  xhttp.open("GET", url + "?a=phrases&w=" + wrd + "&tl=" + tl_, true);
  xhttp.send();
}


function loadWiki(q) {
  q = q.replace(/\s\w+\s/, '').replace(' ', '_').toLowerCase();
  examples.innerHTML = "<iframe id='wiki' src='https://simple.m.wikipedia.org/wiki/"+q+"' width='100%' height='256'/>";
}


function loadExamples(q) {
  examples.innerHTML = "<iframe id='wiki' src='https://en.m.wikipedia.org/w/index.php?ns0=1&search=%22"+encodeURIComponent(q)+"%22' width='100%' height='256'/>";
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
  orig_link.href = "https://www.google.com/search?gl=ru&q=%22" + encodeURIComponent(q) + "%22";
}


function loadQuiz(d) {
  var q = words_[parseInt(Math.random()*words_.length)];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "") {
        examples.innerHTML = "";
        var r = JSON.parse(this.responseText)[0];
        var r_ = [];
        for (var i=0; i<r.meanings.length; i++) {
          for (var j=0; j<r.meanings[i].definitions.length; j++) {
            if (d === true) {
              var e = r.meanings[i].definitions[j].definition;
              if (e) {r_.push(" "+e+" "+r.word+" ");}
            } else {
              var e = r.meanings[i].definitions[j].example;
              if (e) {r_.push(" "+e+" ");}
            }
          }
        }
        var q_ = new RegExp("\\W"+q+"\\W", "gi");
        examples.innerHTML = "<form onsubmit='event.preventDefault();checkCompletion(&quot;"+q+"&quot;);'>"+r_.join("<br/><br/>").replace(q_, function(x) {
       	  return x.slice(0,1)+"<input class='complete' type='text' size='"+(x.length-2)+"' style='width:"+(x.length-2)/1.67+"em' required/>"+x.slice(-1);
        })+"<br/><input id='complete' type='submit' value='>'/></form>";
        examples.scrollTop = 0;
      } else {
        examples.innerHTML = "Unknown word";
      }
    }
  };
  xhttp.open("GET", 'https://api.dictionaryapi.dev/api/v2/entries/en/'+q, true);
  xhttp.send();
}


function checkCompletion(q) {
  var completed = document.getElementsByClassName("complete");
  for (var i=0; i<completed.length; i++) {
    if (completed[i].value != q) {
      completed[i].placeholder = completed[i].value;
      completed[i].value = "";
      completed[i].focus();
      return false;
    }
  }
  loadQuiz(false);
  return true;
}


function speak(ssml) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    var snd = new Audio("data:audio/mp3;base64," + this.responseText);
	  snd.play();
    const byteCharacters = atob(this.responseText);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {type: 'audio/mp3'});
    var o_url = URL.createObjectURL(blob);
    document.getElementById("tts_").src = o_url;
    document.getElementById("tts").load();
  }
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec?a=tts&txt="+ssml);
  xhttp.send();
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


function showLyrics() {
  if (sidebar.style.display!='none') {
    sidebar.style.display='none';
    
    res.style.minWidth='100%';
    res.style.minHeight='256px';
    highlight.style.minWidth='100%';
    highlight.style.minHeight='256px';
  } else {
    sidebar.style.display='block';

    res.style.minWidth='50%';
    res.style.minHeight='128px';
    highlight.style.minWidth='50%';
    highlight.style.minHeight='128px';
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

function showMobile() {
  if (mobile.style.visibility!='visible') {
    mobile.style.visibility='visible';
  } else {
    mobile.style.visibility='hidden';
  }
}

function showList() {
  if (word_.style.position!='absolute') {
    word_.style.position='absolute';
    word_.style.height='180px';
    word_.style.top='24px';
    word_.style.zIndex='1';
  } else {
    word_.style.position='relative';
    word_.style.height='18px';
    word_.style.top='0px';
    word_.style.zIndex='0';
  }
}

function showPhonemes() {
  if (dict.style.visibility!='visible') {
    dict.style.visibility='visible';
  } else {
    dict.style.visibility='hidden';
  }
}

function showSpectrogram() {
  if (spectrogram.style.visibility!='visible') {
    if(ac==null){init();}
    spectrogram.style.visibility='visible';
  } else {
    spectrogram.style.visibility='hidden';
  }
}

function showSyntax() {
  if (syntax.style.visibility!='hidden') {
    syntax.style.visibility='hidden';
  } else {
    syntax.style.visibility='visible';
  }
}

function showWords() {
  if (translations.style.display!='none') {
    translations.style.display='none';
  } else {
    translations.style.display='block';
  }
}

function googleTranslateElementInit() {
  var gt = new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
  languages = document.getElementsByClassName("goog-te-combo")[0];
  languages.onchange = function(e){sl=e.target.options[e.target.selectedIndex].value;};
  it = setInterval(loadLanguages, 1000);
}
