var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
    <h1>Hello, React in NW.js! </h1>
    <h2>--compiled by Babel </h2>
    <h2>--built by Webpack </h2>
    <h2>--composited by Grunt </h2>
    <h2>--default</h2>
  </div>,
  document.getElementById('container')
);