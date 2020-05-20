const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.port || 5000;

const server = http.createServer((req, res) => {
  //console.log(req.url);
  // if (req.url === "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" });

  //   //respond with some text
  //   //res.end("<h1>Home from server<h1/>");

  //   //respond with a file
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.end(content);
  //     }
  //   );
  // }

  // //respond for about page
  // if (req.url === "/about") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.end(content);
  //     }
  //   );
  // }

  // //respond like api

  // if (req.url === "/api/users") {
  //   //here we usually fetch data from database but now instead we define data
  //   let users = [
  //     { name: "john doe", age: "30" },
  //     { name: "rossy", age: "74" },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/jason" });
  //   res.end(JSON.stringify(users));
  // }
  /////////////////////////////////////////////////////////////////////////

  //effective response for all url
  //make file path dynamic
  let add_requrl = req.url.substring(1);

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(req.url);
  console.log(add_requrl);
  console.log(filePath);

  //extension of file
  let extName = path.extname(filePath);

  //initial content type
  let contentType = "text/html";

  //check ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".jason":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      //page not found
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(
          `server problem \n please try later\n server error :${err.code}`
        );
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () => console.log(`server is running on ${port}`));
