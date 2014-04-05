var http  = require("http");
var parse = require("url").parse;
var utils = require("../common/utils");

http.createServer(function (req, res) {
  var num = parseInt(parse(req.url, true).query.n, 10) || 0;
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("The answer: " + utils.calc(num) + "\n");
}).listen(8080);
console.log("running...");
