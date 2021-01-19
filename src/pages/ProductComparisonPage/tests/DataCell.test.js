import React from "react";
import { render } from "@testing-library/react";
import DataCell from "../DataCell";

describe("DataCell", () => {
  it("dom elements check when it has value not icons", () => {
    const { getByText } = render(<DataCell value="value A" />);
    expect(getByText("value A")).toBeInTheDocument();

    const { getByTegetByTextstId } = render(<DataCell value={false} />);
    expect(getByText("No")).toBeInTheDocument();
  });
  it("dom elements check when it has  icons", () => {
    const { getAllByAltText } = render(
      <DataCell value="value A" icons={["link=A", "link=B"]} />
    );
    const img = getAllByAltText("icon");
    expect(getAllByAltText("icon")).toHaveLength(2);
  });
});
