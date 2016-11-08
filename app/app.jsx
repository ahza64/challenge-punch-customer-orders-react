var React = require('react');
var ReactDOM = require('react-dom');
// object destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var CustomerApp = require('CustomerApp');

// load foundation
// $(document).foundation();

// App css
// require('style!css!sass!applicationStyles')

ReactDOM.render(
  <CustomerApp/>,
  document.getElementById('app')
);
