import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductCard from "../index";

describe("ProductCard", () => {
  const minProps = {
    product: {
      name: "product name",
      imageSource: "https://google.image/es2.jpg",
      price: "1.41",
      id: "115E19",
      priceUnit: "per stuk/ excl. btw",
    },
  };
  it("dom elements check", () => {
    const { getByText, getByAltText } = render(<ProductCard {...minProps} />);

    expect(getByText("product name")).toBeInTheDocument();
    expect(getByText("product name").href).toBe("http://localhost/115E19");
    const img = getByAltText("product name");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", minProps.imageSource);
    expect(getByText("€1.41")).toBeInTheDocument();
  });

  it("fire delete button ", () => {
    const onDelete = jest.fn();
    const { container, getByText, getByTestId, getByAltText } = render(
      <ProductCard
        {...minProps}
        hasControllers={true}
        onDelete={onDelete}
        deleteDisable={false}
      />
    );
    const button = getByTestId("remove-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onDelete).toBeCalledWith(minProps.product.id);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

});
