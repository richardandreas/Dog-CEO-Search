import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

test("renders 'Dog CEO Search'", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Dog CEO Search/i)).toBeInTheDocument();
});
