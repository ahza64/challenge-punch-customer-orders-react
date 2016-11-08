
var React = require('react');

var Customer = React.createClass({
  render: function () {
    var {id, name} = this.props;

    return (
      <div>
        {id}. {name}
      </div>
    )
  }
});

module.exports = Customer;
