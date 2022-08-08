import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { forEachChild } from "typescript";
import { Header } from ".";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";

const ComponentToTest = () => {
  return (
    <BrowserRouter>
      <AppThemeContextProvider>
        <Header />
      </AppThemeContextProvider>
    </BrowserRouter>
  );
};

describe("Header component", () => {
  it("should render correctly", () => {
    render(<ComponentToTest />);
    const header = screen.getByTestId("header-test-id");
    expect(header).toMatchSnapshot();
  });

  it("should click on portifolio link", () => {
    render(<ComponentToTest />);

    const portifolioLink = screen.getByTestId("portifolio-link-testid");
    fireEvent.click(portifolioLink);
  });

  it("should click on portifolio link", () => {
    render(<ComponentToTest />);

    const aboutme = screen.getByTestId("aboutme-link-testid");
    fireEvent.click(aboutme);
  });

  it("should click on contact link", () => {
    render(<ComponentToTest />);

    const contact = screen.getByTestId("contact-link-testid");
    fireEvent.click(contact);
  });
});
