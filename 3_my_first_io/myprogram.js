// nodeschool.io

// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines it contains to the
// console (stdout), similar to running `cat file | wc -l`.

// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs');
var path = process.argv[2];
var numberOfNewLines = [];

// Avoided using .toString() by passing in 'utf8'
var dataOutput = fs.readFileSync(path, "utf8");
numberOfNewLines = dataOutput.split('\n');
console.log(numberOfNewLines.length-1);
