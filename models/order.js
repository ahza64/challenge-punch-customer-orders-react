var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  name: String
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
