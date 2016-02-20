var express = require("express");
var expressHandlebars = require("express-handlebars");
var passport = require("passport");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var session = require("express-session");

var app = express();

var sequelize = new Sequelize("secret_clubhouse_db", "root");

var PORT = 7007;

//set default layout for handlebar
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));

//set handlevars and view engine
app.set("view engine", "handlebars");


var Member = sequelize.define("member", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("LISTENING!");
  });
});

app.get("/", function(req, res){
  res.render("home");
});