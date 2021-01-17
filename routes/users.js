var express = require('express');
var router = express.Router();
var Person = require("../models").Person;
var Phone = require("../models").Phone;
var Email = require("../models").Email;

// router.get('/new', function(req, res, next) {
//   res.render('/new', {person: Person.build()});
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  Person.findAll({
    include: [
      {
        model: Phone,
        as: 'phone'
      },
      {
        model: Email,
        as: 'email'
      }
    ]
  }).then(person => {
    res.json(person);
  });
});

router.post('/', function(req, res, next) {
  Person.create(req.body).then(function(person) {
    res.redirect("/");
  });
});

//create phone
router.post('/phone', function(req, res, next) {
  Phone.create(req.body).then(function(phone) {
    res.redirect("/");
  });
});

//create email
router.post('/email', function(req, res, next) {
  Email.create(req.body).then(function(email) {
    res.redirect("/");
  });
});

module.exports = router;
