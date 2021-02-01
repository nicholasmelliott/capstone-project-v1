var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;

const services = [
  {
    type: "Build new screens",
    desc: "Choose the color of your: frame, screen, hardware, etc."
  },
  {
    type: "Build new windows",
    desc: "Choose the color of your: frame, screen, hardware, etc."
  },
  {
    type: "Restore old screens",
    desc: "Bring your house to life by repairing those old, dirty, torn screens."
  },
  {
    type: "Restore old windows",
    desc: "Defeat the winter's cold air and revamp your old storm windows."
  },
  {
    type: "Get glass cut",
    desc: "Need glass? We can cut to size or shape depending on your needs."
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  Order.findAll({
    include: [
      {
        model: Person,
        as: 'orders'
      },
      {
        model: Company,
        as: 'companyOrders'
      },
      {
        model: Product,
        as: 'products'
      }
    ]
  }).then(orders => {
    res.render('index', {services: services, orders: orders});
  });
});


module.exports = router;
