import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";
import { TitleHeader } from ".";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";

const ComponentToTest = () => {
  return (
    <BrowserRouter>
      <AppThemeContextProvider>
        <Header />
        <TitleHeader />
      </AppThemeContextProvider>
    </BrowserRouter>
  );
};

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("TitleHeader component", () => {
  it("should rende correctly and click on portifolio link", () => {
    render(<ComponentToTest />);
    const portifolioLink = screen.getByTestId("portifolio-link-testid");
    expect(portifolioLink).toBeTruthy();
    fireEvent.click(portifolioLink);
  });

  it("should click on contact link", () => {
    render(<ComponentToTest />);
    const contactLink = screen.getByTestId("contact-link-testid");
    const container = screen.getByTestId("TitleHeader-container-testid");
    const portifolioLink = screen.getByTestId("portifolio-link-testid");
    expect(contactLink).toBeTruthy();
    expect(container).toBeTruthy;
    expect(portifolioLink).toBeTruthy();

    fireEvent.click(contactLink);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 800);
  });
});
