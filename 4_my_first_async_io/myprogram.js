// nodeschool.io

// Write a program that uses a single asynchronous filesystem operation
// to read a file and print the number of newlines it contains to the
// console (stdout), similar to running `cat file | wc -l`.

// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs');
var path = process.argv[2];
var numberOfNewLines;

fs.readFile(path, 'utf8', function (err, data) {
  if (err) throw err;
  numberOfNewLines = data.split('\n');
  console.log(numberOfNewLines.length-1);
});
