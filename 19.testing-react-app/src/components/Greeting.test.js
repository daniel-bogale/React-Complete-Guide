import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render hello as a text ", () => {
  //Arrange
  render(<Greeting />);
  //Act
  //Assert
  const helloElem = screen.getByText(/hello/i);
  expect(helloElem).toBeInTheDocument();
});
