var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = require('./order')

var CustomerSchema = new Schema({
  name: String,
  orders: [Order.schema]
});

var Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
