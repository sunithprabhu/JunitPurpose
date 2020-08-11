var events = require("events");
var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});

var eventEmitter = new events.EventEmitter();
var prabhu = function first()
{
response.end("This is my first event");
}
eventEmitter.on("jesus",function(){

    response.end("This is second event occuing............");
});

eventEmitter.on("go",prabhu);

eventEmitter.emit("jesus");
eventEmitter.emit("go");
}).listen(8776);
console.log("program ended...............");
console.log("server ceated on 127.0.0.1:8776.....");