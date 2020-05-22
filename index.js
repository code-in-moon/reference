const express = require("express");
const path = require("path");
const logger = require("./middleware/Logger");
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>sended by server</h1>");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//middleware can access to req and res any time a cliect send a request
//init (initialize) middleware
app.use(logger);

//body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static folder
app.use(express.static(path.join(__dirname, "public")));

//members api's routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started at : " + PORT);
});
