function doGet_() {
  var max = 1;
  var s = SpreadsheetApp.openById("1pFkqqkbiBcKRsdPHgbgBNm6o4Jts4vCbpDRhHmb4H00");
  var sheet = s.getSheets()[0];
  for (var i=121062; i<arr.length+1; i++) {
    if (arr[i-1].charAt(arr[i-1].length-1) != "_") {
      var cell = sheet.getRange("B"+i); //.getValue();
      var page = UrlFetchApp.fetch("https://api.phrasefinder.io/search?corpus=eng-us&query="+ arr[i-1] + "&topk=" + max).getContentText();
      var myObj = JSON.parse(page);
      if (myObj.phrases[0]) {
        var freq = myObj.phrases[0].mc;
        cell.setValue(freq);
        Logger.log(arr[i-1]+" "+freq);
      } else {
        cell.setValue(0);
        Logger.log(arr[i-1]+" 0");
      }
    }
  }
}

function pos(word) {
  var page = UrlFetchApp.fetch("https://books.google.com/ngrams/interactive_chart?content="+word+"_%2A&year_start=1800&year_end=2019&corpus=26&smoothing=0&case_insensitive=true").getContentText();
  var json = JSON.parse(page.split("ngrams.data = ")[1].split(";")[0]);
  var r = [];
  for (var i=0; i<json.length; i++) {
    r[i]=json[i].ngram.split("_")[1];
  }
  return r;
}

function firebase() {
 var apiEndpoint = "https://freealise-181308.firebaseio.com/nonsense/.json";
 var nlOptions = {
   method : 'delete',
   contentType: 'application/json',
   headers: { Authorization: "Bearer "+ ScriptApp.getOAuthToken()},
   muteHttpExceptions: true
 };
 var response = UrlFetchApp.fetch(apiEndpoint, nlOptions).getContentText();
 Logger.log(response);
}

function doGet(e) {
  if (e.parameter.a == "languages") {
    return ContentService.createTextOutput(languages(e.parameter.tl));
  } else if (e.parameter.a == "spell") {
    return ContentService.createTextOutput(spell(e.parameter.w, e.parameter.tl));
  } else if (e.parameter.a == "parse") {
    return ContentService.createTextOutput(parse(e.parameter.q));
  } else if (e.parameter.a == "nsm") {
    return ContentService.createTextOutput(nsm(e.parameter.q));
  } else if (e.parameter.a == 'post') {
    return ContentService.createTextOutput(post(e.parameter.name, e.parameter.site, e.parameter.email, e.parameter.subj, e.parameter.msg));
  } else if (e.parameter.a == 'subscribe') {
    return ContentService.createTextOutput(addGroupMember(e.parameter.email));
  } else if (e.parameter.a == 'unsubscribe') {
    return ContentService.createTextOutput(removeGroupMember(e.parameter.email));
  } else if (e.parameter.a == 'contact') {
    return ContentService.createTextOutput(contact(e.parameter.name, e.parameter.site, e.parameter.email, e.parameter.subj, e.parameter.msg, e.parameter.token));
  } else if (e.parameter.a == 'blog') {
    return ContentService.createTextOutput(blogPost(e.parameter.t, e.parameter.c, e.parameter.l, e.parameter.p, e.parameter.lat, e.parameter.lng));
  }
}
