import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render hello as a text ", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //Assert
    const helloElem = screen.getByText(/hello/i);
    expect(helloElem).toBeInTheDocument();
  });
});

test("renders good to see you if the button was NOT clicked", () => {
  render(<Greeting />);
  const outputElement = screen.getByText("good to see you", { exact: false });
  expect(outputElement).toBeInTheDocument();
});

test("render 'changed!' if the button was clicked", () => {
  //Arrange
  render(<Greeting />);

  //Act
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  //Assert
  const outputElement = screen.getByText(" ", { exact: false });
  expect(outputElement).toBeInTheDocument();
});
