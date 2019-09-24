import React from "react";
import { cleanup, render } from "@testing-library/react";
import Jokes from "./Jokes";

let mockX = {
  loading: false,
  data: [{ id: 1, joke: "A joke" }]
};

jest.mock("./useFetch", () => () => {
  return mockX;
});

afterEach(cleanup);

test("Render jokes", () => {
  //   mockX = { loading: true, data: [] };

  const { getByText } = render(<Jokes />);

  getByText(/a joke/i);
});
