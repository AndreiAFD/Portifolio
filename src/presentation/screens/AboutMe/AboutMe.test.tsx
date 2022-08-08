import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AboutMe } from ".";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";

const ComponentToTest = () => {
  return (
    <BrowserRouter>
      <AppThemeContextProvider>
        <AboutMe />
      </AppThemeContextProvider>
    </BrowserRouter>
  );
};

describe("AboutMe screen", () => {
  it("should render correctly", () => {
    render(<ComponentToTest />);
    const container = screen.getByTestId("aboutme-container-testid");
    expect(container).toMatchSnapshot();
  });
});
