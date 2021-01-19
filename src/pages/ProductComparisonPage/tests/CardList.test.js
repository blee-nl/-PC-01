import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "../CardList";

describe("CardList", () => {
  it("dom elements check", () => {
    const sampleProps = {
      onDelete: jest.fn(),
      cardListInfo: {
        "115E1A": {
          name: "item one",
          imageSource: "https://local1.jpg",
          price: "1.66",
          priceUnit: "per stuk/ excl. btw",
        },
        "115E19": {
          name: "item 2",
          imageSource: "https://local2.jpg",
          price: "8.66",
          priceUnit: "per stuk/ excl. btw",
        },
        ss5c3: {
          name: "item 3",
          imageSource: "https://local4.jpg",
          price: "0.6",
          priceUnit: "per stuk/ excl. btw",
        },
      },
      cardIds: ["115E19", "ss5c3", "115E1A"],
    };

    render(<CardList {...sampleProps} />);

    const ProductCard = screen.getAllByTestId('product-card');
    expect(ProductCard).toHaveLength(3);

  });
});
