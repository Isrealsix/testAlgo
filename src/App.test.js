import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and a text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // expect background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button has correct initial text", () => {});

test("button turns blue when clicked", () => {});
