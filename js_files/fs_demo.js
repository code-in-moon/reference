const fs = require("fs");
const path = require("path");

//create a folder :asynchronous method       synchronous method : fs.mkdirSync
fs.mkdir(path.join(__dirname, "test"), {}, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("folder created");
  }
});

// create a file  fs.open
//create and write a file
// you can use arrow function
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "write from node",
  (err) => {
    if (err) throw err;
    console.log("file created");
  }
);

// write file always overwrite afile
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "write from node i am here",
  (err) => {
    if (err) throw err;
    console.log("file created");

    //   for adding sth to file use append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "\nkeep going dont give up you are the next multi",
      (err) => {
        if (err) console.log(err);
        console.log("update successfully");
      }
    );
  }
);

//for adding sth to file use append
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "\nkeep going dont give up you are the next multi bilionair",
  (err) => {
    if (err) console.log(err);
    console.log("update successfully");
  }
);

//read file
let file_data = "";
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  file_data = data;
  console.log(file_data);
  console.log(typeof file_data);
});

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "great.txt"),
  (err) => {
    if (err) throw err;
    console.log("rename to greate");
  }
);
