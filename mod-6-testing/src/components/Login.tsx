import React, { FunctionComponent } from "react";

type Props = {
  login: () => void;
};

const Login: FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input id="username" />
      <label>
        Password:
        <input />
      </label>
      <button onClick={() => props.login()}>Login</button>
    </div>
  );
};

export default Login;
