const url = require("url");

const myUrl = new URL(
  "https://mywebsite.com:8000/indexe.html?id=100&status=active"
);

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.toJSON());

//root domain
console.log(myUrl.host);

//hostname (doesnot get [port)
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);
