import React, { Component, ChangeEvent } from "react";
import withErrorBoundary from "./errorBoundary";
import LabelWithInput from "./LabelWithInput";

type Props = {
  children?: never;
};

type State = {
  firstName: string;
  lastName: string;
};

class Person extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstName: "Ford",
      lastName: "Prefect"
    };
  }
  // static defaultProps = {
  //   xxxx: 1
  // };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;
    // return ""
    // return null
    // return undefined;

    return (
      <div>
        <LabelWithInput<State>
          label="Firstname: "
          name="firstName"
          value={firstName}
          onChange={this.onChange}
        />
        <LabelWithInput<State>
          label="Lastname: "
          name="lastName"
          value={lastName}
          onChange={this.onChange}
        />
        <div>
          Hello {firstName} {lastName}
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(Person);
