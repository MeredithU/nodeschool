// nodeschool.io

/*This problem is the same as the previous problem (HTTP COLLECT) in
that you need to use `http.get()`. However, this time you will be
provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the
URLs and print it to the console (stdout). You don't need to print out
the length, just the data as a String; one line per URL. The catch is
that you must print them out in the same order as the URLs are
provided to you as command-line arguments.*/

var http = require('http');
var bl = require('bl');
var firstURL = process.argv[2];
var secondURL = process.argv[3];
var thirdURL = process.argv[4];

http.get(firstURL, function(req, res) {
  req.setEncoding('utf8');
  req.pipe(bl(function (err, data) {
    data = data.toString();
    console.log(data);
  }));

  http.get(secondURL, function(req, res) {
    req.setEncoding('utf8');
    req.pipe(bl(function (err, data) {
      data = data.toString();
      console.log(data);
    }));
  });

  http.get(thirdURL, function(req, res) {
    req.setEncoding('utf8');
    req.pipe(bl(function (err, data) {
      data = data.toString();
      console.log(data);
    }));
  });
});
