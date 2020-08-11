var events = require('events');

var eventEmitter = new events.EventEmitter();


var first = function jesus()
{
    console.log("This is talking first");
}

var second = function jesus1()
{
    console.log("This is talking second");
}

eventEmitter.addListener("connector",first);

eventEmitter.on("connector",second);

var count = require('events').EventEmitter.listenerCount(eventEmitter,"connector");

console.log(count + " are listening for connector..........");

eventEmitter.emit("connector");

eventEmitter.removeListener("connector",first);
var count1 = require('events').EventEmitter.listenerCount(eventEmitter,"connector");
console.log(count1 + " are pesent unning after deleting first ");

eventEmitter.emit("connector");