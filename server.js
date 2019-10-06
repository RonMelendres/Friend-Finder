var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
    