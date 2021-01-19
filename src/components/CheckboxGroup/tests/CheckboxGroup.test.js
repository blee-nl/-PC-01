import React from "react";
import { render, screen  } from "@testing-library/react";
import CheckboxGroup from "../index";

describe("CheckboxGroup", () => {
  it("dom elements check", () => {
    const sampleProps = {
      subjects: ["115E19", "11545A", "1154ed3A"],
      list: { "115E19": "value1", "11545A": "value2", "1154ed3A": "value3" },
      currentSelected: ["115E19", "11545A"],
      onChange: jest.fn(),
    };
    render(<CheckboxGroup {...sampleProps} />);
    const checkButton = screen.getAllByTestId("checkbox-button");
    expect(checkButton).toHaveLength(3);
  });
});
