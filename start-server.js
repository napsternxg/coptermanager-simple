var repl = require('repl');
var coptermanager = require('coptermanager-simple');

var client = new coptermanager.Client({
	serialport: '/dev/ttyS0' // unix
//    serialport: 'COM6' // windows
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
