const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.port || 5000;

const server = http.createServer((req, res) => {
  //console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    //respond with some text
    //res.end("<h1>Home from server<h1/>");

    //respond with a file
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.end(content);
      }
    );
  }
});

server.listen(port, () => console.log(`server is running on ${port}`));
