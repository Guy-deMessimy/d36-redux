import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
