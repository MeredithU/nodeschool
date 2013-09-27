// nodeschool.io

/*Write a program that performs an HTTP GET request to a URL provided to
you as the first command-line argument. Write the String contents of
each "data" event from the response to a new line on the console
(stdout).*/

var http = require('http');
var url = process.argv[2];

http.get(url, function(req, res) {
  req.setEncoding('utf8');
  req.on('data', function (data) {
    console.log(data);
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
