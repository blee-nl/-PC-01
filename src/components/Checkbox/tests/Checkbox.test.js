import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "../index";

describe("Checkbox", () => {

  it("dom elements check", () => {
    const { container, getByText, getByTestId } = render(
      <Checkbox label="click button" />
    );
    
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(getByTestId("closedIcon")).toBeInTheDocument();
    expect(getByText("click button")).toBeInTheDocument();
  });

  it("fire button ", () => {

    const onChange = jest.fn();
    const id='123';

    const { container, getByTestId } = render(
      <Checkbox label="click button" onChange={onChange} id={id} />
    );
    const button = container.querySelector("button");

    fireEvent.click(button);
    expect(getByTestId("checkedIcon")).toBeInTheDocument();
    expect(onChange).toBeCalledWith(id);

    fireEvent.click(button);
    expect(getByTestId("closedIcon")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(2)
  });

});
