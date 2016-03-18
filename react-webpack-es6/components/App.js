import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello, React! </h1>
        <h2>--compiled by Babel </h2>
        <h2>--built by Webpack </h2>
        <h2>--using ES6 </h2>
      </div>
    )
  }
}

export default App