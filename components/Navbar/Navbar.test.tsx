import Navbar from "./Navbar";
import { findByDisplayValue, render } from "@testing-library/react";

describe("Navbar", () => {
  it("has a Home link", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("Home")).toBeInTheDocument();
  });
});
