var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, React! </h1>
        <h2>--compiled by Babel </h2>
        <h2>--built by Webpack </h2>
        <h2>--composited by Grunt </h2>
      </div>
    );
  }
});

module.exports = App;
