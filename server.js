var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var hbs = exphbs.create({
  /* config */
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("."));

const apiKey = process.env.GOOGLE_MAP_API_KEY || "";

app.get("/", function(req, res, next) {
  res.render("index", {
    apiKey: apiKey
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
