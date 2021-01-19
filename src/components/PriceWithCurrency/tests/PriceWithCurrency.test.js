import React from "react";
import { render } from "@testing-library/react";
import PriceWithCurrency from "../index";

describe("PriceWithCurrency", () => {

  it("price goes to string with euro symbol", () => {
    const { getByText } = render(
      <PriceWithCurrency price={11.06} />
    );
    expect(getByText("€11.06")).toBeInTheDocument();
  });

  it("price goes to string with requested currency symbol", () => {
    const { getByText } = render(
      <PriceWithCurrency price={11.06} currency='USD'/>
    );
    expect(getByText("$11.06")).toBeInTheDocument();
  });

});
