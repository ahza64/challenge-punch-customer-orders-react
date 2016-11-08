
var React = require('react');
var CustomerList = require('CustomerList');
var Customer = require('Customer');
var AddCustomer = require('AddCustomer');
var uuid = require('node-uuid');


var CustomerApp = React.createClass({
  getInitialState: function () {
    return {
      customers: [
        {
          id: uuid(),
          name: 'Ned Stark'
        },
        {
          id: uuid(),
          name: 'Jon Snow'
        }
      ]
    };
  },
  handleAddCustomer: function (name) {
    this.setState({
      customers: [
        ...this.state.customers,
        {
          id: uuid(),
          name: name
        }
      ]
    });
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
