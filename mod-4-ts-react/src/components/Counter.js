import React, { PureComponent } from "react";

class Counter extends PureComponent {
  state = { count: 0, name: "Maurice" };

  onClick = () => {
    this.setState(function(state) {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <>
        <span>Value {this.state.count} </span>
        <button onClick={this.onClick}>Increment</button>
      </>
    );
  }
}

export default Counter;
