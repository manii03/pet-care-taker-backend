var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

const url =
  "mongodb+srv://manishadnb0703:JuQk6XmURMU0cL74@cluster0.nd0omap.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose.connect(url).then(() => {
  console.log("Connected");
});
module.exports = router;
