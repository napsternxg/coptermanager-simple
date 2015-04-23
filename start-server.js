var repl = require('repl');
var colors = require('colors');
var coptermanager = require('coptermanager-simple');

var client = new coptermanager.Client({
//    serialport: '/dev/tty.usbmodem1411' // unix
    serialport: 'COM4' // windows
});
var server = new coptermanager.Server(client, '127.0.0.1');

console.log("COPTERMANAGER".green.bold);
console.log("=============\n".green.bold);

server.start(function() {
  client.bind(function(data) {
    if (data.result == "success") {
      console.log("\nCopter bound.".bold);
      client.startRepl();
    }
  });
});
