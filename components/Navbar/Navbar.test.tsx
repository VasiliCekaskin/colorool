import Navbar from "./Navbar";
import { render, getByAltText, getByText } from "@testing-library/react";

describe("Navbar", () => {
  it("has a sign in link/button", () => {
    const { getByAltText } = render(<Navbar />);

    const Logo = getByAltText("colorool logo");

    expect(Logo).toBeInTheDocument();
  });

  it("has all required links", () => {
    const { getByText } = render(<Navbar />);

    const homeLink = getByText("Home");
    const colorPalettes = getByText("Color Palettes");
    const helpCenter = getByText("Help Center");

    expect(homeLink).toBeInTheDocument();
    expect(colorPalettes).toBeInTheDocument();
    expect(helpCenter).toBeInTheDocument();
  });

  it("has a sign in link/button", () => {
    const { getByText } = render(<Navbar />);

    const signInLink = getByText("Sign In");

    expect(signInLink).toBeInTheDocument();
  });
});
