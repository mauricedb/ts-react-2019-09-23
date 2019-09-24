import React, { Component } from "react";

type Props = {};
type State = {
  count: number;
};

class Counter extends Component<Props, State> {
  // state = { count: 0, x: true };

  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  onClick = () => {
    // this.state.count = 5;

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
