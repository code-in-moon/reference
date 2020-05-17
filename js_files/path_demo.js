const path = require("path")

console.log(__filename)

//file base name
console.log(path.basename(__filename))

//file directory
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))

//concatenate path : ../test/hello.html
console.log(path.join(__dirname,"test","hello.html"))