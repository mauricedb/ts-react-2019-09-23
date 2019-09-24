import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

afterEach(cleanup);

test("Can render", () => {
  const { getByText, getByLabelText } = render(<Login />);

  expect(getByLabelText("Username:")).toBeVisible();
  expect(getByLabelText("Password:")).toBeVisible();
  expect(getByText("Login")).toBeVisible();
});

test("Can login", () => {
  const login = jest.fn();
  const { getByText } = render(<Login login={login} />);

  fireEvent.click(getByText("Login"));

  expect(login).toHaveBeenCalled();
});
