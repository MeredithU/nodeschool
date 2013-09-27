// Learn You Node - nodeschool.io
// Write a program that accepts one or more numbers as command-line
// arguments and prints the sum of those numbers to the console (stdout).

var sumEl = 0;

for(var i=2; i < process.argv.length; i++) {
  sumEl = +process.argv[i] + sumEl;
}
console.log(sumEl);
