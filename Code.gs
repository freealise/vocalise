var max = 1;

function doGet_() {
  var s = SpreadsheetApp.openById("<!--id-->");
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

function doGet(e) {
  var r = "<ul>";
  var word_ = new RegExp(e.parameter.w, "i");
  var query = new RegExp(e.parameter.q.replace(/_/g, ".").replace(/\*/g, ".*"), "i");
  var query_ = new RegExp(e.parameter.q_.replace(/_/g, ".{1,2}").replace(/\*/g, ".*"), "i");
  
  for (var i = 0; i < d.length; i++) {
      /*var a = arr[i][1].split(" ");
      var v = "";
      var c = "";
      for (var j=0; j<a.length; j++) {
        var num = a[j].substr(-1, 1);
        if (num == "0" || num == "1" || num == "2") {
          v += a[j] + " ";
        } else {
          c += a[j] + " ";
        }
      }*/
      var w = d[i][0];
      var p = d[i][1];
      var v = d[i][2];
      var c = d[i][3];
      
      var w_ = w.match(word_);
      var v_ = v.match(query);
      var c_ = c.match(query_);
      
      if (((v_ && v == v_[0]) || e.parameter.q === "") && ((c_ && c == c_[0]) || e.parameter.q_ === "") && (w_ || e.parameter.w === "")) {
        var freq = d[i][4]/100000;
        var o = Math.pow(parseFloat(freq), 1/4)/4;
        r += '<li title="' + p + '">' + w + '</li>';
      }
  }
  r += '</ul>';
  return ContentService.createTextOutput(r);
}
