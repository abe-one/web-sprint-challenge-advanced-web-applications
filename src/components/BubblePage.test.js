import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockFetchColors from "../helpers/fetchColors";
jest.mock("../helpers/fetchColors");

const testColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
];

test("Renders BubblePage without errors", () => {
  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  //  Arrange

  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage />);
  // const color = await screen.findAllByTestId("color");
  // console.log(color);
  //  Act
  //  Assert
  expect((await screen.findAllByTestId("color")).length).toBe(1);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
