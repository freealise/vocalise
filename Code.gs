function doGet(e) {
  var r = "";
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
        r += '<option value="' + p + '">' + w + '</option>\n';
      }
  }
  return ContentService.createTextOutput(r);
}
