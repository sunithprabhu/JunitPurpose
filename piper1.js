var http = require("http");

http.createServer(function(request,response)
{
    response.writeHead(200,{'content-type':'text/plain'});

    response.write("Sorry my Lord");

}).listen(8082);

console.log("server created using listen port number:8082");


