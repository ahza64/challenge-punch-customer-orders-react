
var React = require('react');
var CustomerList = require('CustomerList');
var Customer = require('Customer');
var AddCustomer = require('AddCustomer');


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
  handleAddCustomer: function (name) {
    alert('new customer ' + name);
  },
  render: function () {
    var {customers} = this.state;
    return (
      <div>
        <CustomerList customers={customers} />
        <AddCustomer onAddCustomer={this.handleAddCustomer}/>
      </div>
    )
  }
});

module.exports = CustomerApp;
