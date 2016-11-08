var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/punch');

module.exports.Customer = require('./customer');
module.exports.Order = require('./order');
