
var React = require('react');
var CustomerList = require('CustomerList');
var Customer = require('Customer');


var CustomerApp = React.createClass({
  render: function () {
    return (
      <div>
        <CustomerList />
        <Customer />
        CustomerApp component
      </div>
    )
  }
});

module.exports = CustomerApp;
