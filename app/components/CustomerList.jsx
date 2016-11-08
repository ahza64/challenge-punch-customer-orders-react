
var React = require('react');
var Customer = require('Customer');

var CustomerList = React.createClass({
  render: function () {
    var {customers} = this.props;
    var renderCustomers = () => {
      return customers.map((customer) => {
        return (
          <Customer key={customer.id} {...customer}/>
        )
      });
    }

    return (
      <div>
        {renderCustomers()}
      </div>
    )
  }
});

module.exports = CustomerList;
