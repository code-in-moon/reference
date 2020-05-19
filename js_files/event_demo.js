const EventEmitter = require("events");
//import events from events;

//create class
class MyEmmiter extends EventEmitter {}

//init object
const myEmmiter = new MyEmmiter();

//event listener
myEmmiter.on("event1", () => console.log("event1 is running"));

myEmmiter.on("event2", () => {
  console.log("event2 is running is different from event 1");
});

myEmmiter.emit("event1");
myEmmiter.emit("event2");
myEmmiter.emit("event2");
myEmmiter.emit("event2");

// you can pass data when you emit an event

myEmmiter.on("say_hello", (data) => {
  console.log("hiiiii   " + data);
});

myEmmiter.emit("say_hello", "john");
