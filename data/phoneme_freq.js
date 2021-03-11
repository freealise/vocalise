
var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./node_module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<pre>\n");
  
  var d = [];
  var arr = [];
  var f = [];
  var p = [];
  var values = [];
  var j=0;
  var j_=0;
  
  fs.readFile('vowels/index_c_freq.csv', "utf8", function(err, data) {
    d = data.split("\n");
    for (i = 0; i < d.length; i++) {
      arr[i] = d[i].split(",");
      f[i] = arr[i][1];
      p[i] = arr[i][0].split(" ");
    }
    for (i = 0; i < d.length; i++) {
      for (var l=0; l<p[i].length; l++) {
        if (p[i][l] !== "") {
          values[j] = p[i][l];
          for (var k=i; k<d.length; k++) {
            for (var m=0; m<p[k].length; m++) {
              if (p[k][m] == values[j]) {
                j_ = j_ + parseInt(f[k]);
                p[k][m] = "";
              }
            }
          }
          res.write(values[j] + "," + j_ + "\n");
          j_=0;
          j++;
        }
      }
    }
    res.end("</pre>");
  });
  
}).listen(8080);
