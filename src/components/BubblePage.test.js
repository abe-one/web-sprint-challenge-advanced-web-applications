import React from "react";
import { findAllByTestId, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  //  Arrange
  render(<BubblePage />);
  const colors = screen.findAllByTestId("color");

  //  Act

  //  Assert
  expect(await colors).toBeInTheDocument();
  // expect((await colors).length).toBeGreaterThan(0);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
