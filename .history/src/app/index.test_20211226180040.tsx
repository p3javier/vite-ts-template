import React from "react";
import { render } from "@testing-library/react";
import Pp from "./index";

describe("Main tests", () => {
  test("the component is present", () => {
    render(<Pp />);
  });
});
