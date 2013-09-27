// nodeschool.io

/*Write a TCP time server!

Your server should listen to TCP connections on port 8000. For each
connection you must write the current date & time in the format:

  YYYY-MM-DD HH:MM

followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:

  2013-07-06 07:42*/

// STILL NEEDS TO BE COMPLETED


var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
  socket.on('data', function() {
    data.setEncoding('utf8');
    socket.write(data);
    console.log(moment(data, [YYYY-MM-DD]));
    socket.end(data);
  });
})
server.listen(8000);
