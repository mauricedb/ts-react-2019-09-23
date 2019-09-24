import React, { Component } from "react";
import withErrorBoundary from "./errorBoundary";
import LabelWithInput from "./LabelWithInput";

class Person extends Component {
  state = {
    firstName: "Ford",
    lastName: "Prefect"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <LabelWithInput
          label="Firstname: "
          name="firstName"
          value={firstName}
          onChange={this.onChange}
        />
        <LabelWithInput
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
