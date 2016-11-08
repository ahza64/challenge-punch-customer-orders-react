
var React = require('react');

var AddCustomer = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var customerName = this.refs.customerName.value;

    if (customerName.length > 0) {
      this.refs.customerName.value = '';
      this.props.onAddCustomer(customerName);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="customerName" placeholder="New Customer Name"/>
          <button>Add Customer</button>
        </form>
      </div>
    )
  }
});

module.exports = AddCustomer;
