import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and a text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // expect background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // Using the fireEvent to make a click on the button
  fireEvent.click(colorButton);

  // After click, we expect the button background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // Also expect the textContent to change
  expect(colorButton.textContent).toBe("change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  // We use the not to negate the to be checked
  expect(checkbox).not.toBeChecked();
});

test("button has correct initial text", () => {});

test("button turns blue when clicked", () => {});
