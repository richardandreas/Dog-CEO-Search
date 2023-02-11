import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import App from "./app";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

afterEach(cleanup);

test("renders header", async () => {
  window.history.pushState({}, "Test Page Title", "/my_saved_dogs");

  const app = render(<App />);
  const header = await waitFor(() => app.getByText(/Dog CEO Search/i));

  expect(header).toBeInTheDocument();
});
