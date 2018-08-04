var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("In here");
});

app.listen(8080, () => {
  console.log("server started");
});
