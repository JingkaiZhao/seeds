var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

ReactDOM.render(React.createElement(
  App,
  null,
  React.createElement(
    'h1',
    null,
    'Hello, React in NW.js! '
  ),
  React.createElement(
    'h2',
    null,
    '--compiled by Babel '
  ),
  React.createElement(
    'h2',
    null,
    '--built by Webpack '
  ),
  React.createElement(
    'h2',
    null,
    '--composited by Grunt '
  ),
  React.createElement(
    'h2',
    null,
    '--default'
  )
), document.getElementById('body-container'));
