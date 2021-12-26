import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";

describe("Main tests", () => {
  test("the component is present", () => {
    render(<App />);
    const element = screen.getByTestId("prueba");
    expect(element).toBeDefined();
  });
});
