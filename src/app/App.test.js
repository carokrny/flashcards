import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders topics tab", () => {
  render(<App />);
  const topicsElement = screen.getByText(/topics/i);
  expect(topicsElement).toBeInTheDocument();
});
