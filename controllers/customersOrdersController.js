var db = require('../models');

function create (req, res) {
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    var newOrder = new db.Order(req.body);
    foundCustomer.orders.push(newOrder);
    foundCustomer.save(function (err, savedOrder) {
      console.log("created new order", savedOrder);
      res.json(newOrder)
    })
  });
}

function destroy (req, res) {
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    var correctOrder = foundCustomer.orders.id(req.params.orderId);
    if (correctOrder) {
      correctOrder.remove();
      // have to resave customer, not that order is gone
      foundCustomer.save(function (err, saved) {
        console.log("delete order", correctOrder.name, "and saved updated customer");
        res.json(correctOrder);
      });
    } else {
      res.send(404);
    }
  })
}

function update (req, res) {
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    var correctOrder = foundCustomer.orders.id(req.params.orderId);
    if (correctOrder) {
      correctOrder.name = req.body.name;
      foundCustomer.save(function (err, saved) {
        console.log("updated order ", correctOrder, "to the customer");
        res.json(correctOrder);
      });
    } else {
      res.send(404);
    }
  })
}


module.exports = {
  create: create,
  destroy: destroy,
  update: update
}
