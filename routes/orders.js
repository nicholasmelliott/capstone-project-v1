var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;

const services = [
  {
    type: "Build new screens",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-outer.svg"
  },
  {
    type: "Build new windows",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-all.svg"
  },
  {
    type: "Restore old screens",
    desc: "Bring your house to life by repairing those old, dirty, torn screens.",
    imgSrc: "layers-fill.svg"
  },
  {
    type: "Restore old windows",
    desc: "Defeat the winter's cold air and revamp your old storm windows.",
    imgSrc: "layers-half.svg"
  },
  {
    type: "Custom Glass",
    desc: "Need glass? We can cut to size or shape depending on your needs.",
    imgSrc: "columns-gap.svg"
  },
];

//Create an order
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
        as: 'products',
        include: [
          {
            model: Dimension
          }
        ]
      }
    ]
  }).then(orders => {
    res.render('orders', {services: services, orders: orders});
  });
});

router.post('/', function(req, res, next) {
  console.log(res);
});

module.exports = router;