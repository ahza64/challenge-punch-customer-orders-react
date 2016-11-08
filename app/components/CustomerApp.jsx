
var React = require('react');
var CustomerList = require('CustomerList');
var Customer = require('Customer');


var CustomerApp = React.createClass({
  getInitialState: function () {
    return {
      customers: [
        {
          id: 1,
          name: 'Ned Stark'
        },
        {
          id: 2,
          name: 'Jon Snow'
        }
      ]
    };
  },
  render: function () {
    var {customers} = this.state;
    return (
      <div>
        <CustomerList customers={customers} />
      </div>
    )
  }
});

module.exports = CustomerApp;
