import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders title Lista de Tarefas", () => {
  render(<App />);
  const linkElement = screen.getByText(/Lista de Tarefas/i);
  expect(linkElement).toBeInTheDocument();
});
