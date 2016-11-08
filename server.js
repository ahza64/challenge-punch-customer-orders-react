
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
// pull in server controllers
var controllers = require('./controllers');

// pull in public folder
app.use(express.static(__dirname + '/public'));
// pull in bower for ng with vendor
app.use('/vendor', express.static(__dirname + '/bower_components'));

// set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// fetch html index
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// ready templates for ng
app.get('/templates/:name', function templates (req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

//*************//
// JSON routes //
app.get('/customers', controllers.customers.index);
app.get('/customers/:custId', controllers.customers.show);
app.post('/customers', controllers.customers.create);
app.put('/customers/:custId', controllers.customers.update);
app.delete('/customers/:custId', controllers.customers.destroy);

app.post('/customers/:custId/orders', controllers.customersOrders.create);
app.delete('/customers/:custId/orders/:orderId', controllers.customersOrders.destroy);
app.put('/customers/:custId/orders/:orderId', controllers.customersOrders.update);

// default page for templates
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on port 3000');
});
