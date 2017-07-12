var express = require('express');
var session = require('express-session');
var mustacheExpress = require('mustache-express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes');



app.get('mustache', mustache());
app.get('view engine', 'mustache');
app.get('views', './views');
app.get("/", function(req, res) {
  res.redirect("/links");
})

app.use(bodyParser, urlencoded({
  extended: true
}));

app.use('/',routes);

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
