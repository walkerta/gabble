const express = require('express');
const router = express.Router();
const models = require("../models");


var users = require('./routes/users');
ar express = require('express');
var sequelizeRouter = require('sequelize-router');
var db = require('./models');

var app = express();

router.post('/', function(req, res) {
  models.User.create({ username: req.body.username }).then(function() {
    res.redirect('/');
  });
});
module.exports = router;


// Use the sequelize-router middleware as shown below
app.use('/api', sequelizeRouter(db.Inventory));
app.use('/api', sequelizeRouter(db.Store));
app.use('/api', sequelizeRouter(db.Transaction));

router.get("/gabbles", function(req, res) {
  models.gabble.findAll().then(function(gabbles) {
    res.render("index", {
      gabbles: gabbles
    });
  });
});

// create form for gabble
router.get("/gabbles/create", function(req, res) {
  res.render("form");
})

// create action for gabble
router.post("/gabbles", function(req, res) {
  req.checkBody("title", "You must include a title.").notEmpty();
  req.checkBody("url", "Your URL is invalid.").isURL();

  const gabbleData = {
    title: req.body.title,
    url: req.body.url,
    descr: req.body.descr
  };


// view gabble
router.get("/gabbles/:gabbleId", getgabble, function(req, res) {
  req.gabble.clicks += 1;
  req.gabble.save().then(function() {
    res.redirect(req.gabble.url);
  });
});

// edit form for gabble
router.get("/gabbles/:gabbleId/edit", getgabble, function(req, res) {
  res.render("form", {
    gabble: req.gabble,
    action: "/gabbles/" + req.gabble.id,
    buttonText: "Update gabble"
  });
})

// edit action for gabble
router.post("/gabbles/:gabbleId", getgabble, function(req, res) {
  req.checkBody("title", "You must include a title.").notEmpty();
  req.checkBody("url", "Your URL is invalid.").isURL();

  const gabbleData = {
    title: req.body.title,
    url: req.body.url,
    descr: req.body.descr
  };

  req.getValidationResult().then(function(result) {
    if (result.isEmpty()) {
      req.gabble.update(gabbleData).then(function(newgabble) {
        res.redirect("/");
      });
    } else {
      const errors = result.mapped();
      res.render("form", {
        gabble: gabbleData,
        errors: errors,
        action: "/gabbles/" + req.gabble.id,
        buttonText: "Update gabble"
      });
    }
  });
});

// delete action for gabble
router.post("/gabbles/:gabbleId/delete", getgabble, function(req, res) {
  req.gabble.destroy().then(function() {
    res.redirect("/");
  });
});
