var fs = require("fs");
var http = require("http");
http.createServer(function(requset,response){

response.writeHead(200,{'content-type':'text/plain'});
//now i am ceating non-blocking it means wheater data read or not 
//final output will display......................
fs.readFileSync("C:/Users/RISENSHINE/Desktop/for.txt",function(err,data){
if(err) {
    response.end(err);
}else{
response.end(data.toString());
response.end("yeah its ok");
}
});
}).listen(8337);

console.log("Hey server on 127.00.1:8337 and its printing..........")