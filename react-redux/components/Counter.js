import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

let Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
}

Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Counter