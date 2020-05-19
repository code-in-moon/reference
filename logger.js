const EventEmitter = require("events");
const uuid = require("uuid");

//console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

//module.exports = Logger;                     export
//const Logger = require("./logger");         import to another file

const logger = new Logger();

logger.on("message", (data) => {
  console.log(data);
});

//logger.emit("message");
logger.log("hello");
logger.log("hi");
logger.log("hello I am here");
