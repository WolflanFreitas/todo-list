import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders Algo in screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Algo/i);
  expect(linkElement).toBeInTheDocument();
});
