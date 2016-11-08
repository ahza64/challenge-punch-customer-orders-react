
var db = require('../models');

function index (req, res) {
  db.Customer.find({}, function (err, allCustomers) {
    res.json(allCustomers);
  });
}

function show (req, res) {
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    if (err) { console.log("error show customer", err); }
    res.json(foundCustomer);
  })
}

function create (req, res) {
  db.Customer.create(req.body, function (err, customer) {
    if (err) {console.log("error posting customer", err);}
    console.log(customer);
    res.json(customer);
  })
}

function update (req, res) {
  console.log("updating with", req.body);
  db.Customer.findById(req.params.custId, function (err, foundCustomer) {
    foundCustomer.name = req.body.name;
    foundCustomer.save(function(err, savedCustomer) {
      if (err) { console.log("save error", err); }
      res.json(savedCustomer);
    })
  })
}

function destroy (req, res) {
  db.Customer.findOneAndRemove({ _id: req.params.custId}, function (err, foundCustomer) {
    res.json(foundCustomer);
  })
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
