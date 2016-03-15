var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

ReactDOM.render(
  <App>
    <h1>Hello, React in NW.js! </h1>
    <h2>--compiled by Babel </h2>
    <h2>--built by Webpack </h2>
    <h2>--composited by Grunt </h2>
    <h2>--default</h2>
  </App>,
  document.getElementById('body-container')
);