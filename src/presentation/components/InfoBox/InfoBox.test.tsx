import React from "react";
import { render, screen } from "@testing-library/react";
import { InfoBox } from ".";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";

const ComponentToTest = () => {
  return (
    <AppThemeContextProvider>
      <InfoBox />
    </AppThemeContextProvider>
  );
};

describe("InfoBox component", () => {
  it("should render correctly", () => {
    render(<ComponentToTest />);
    const container = screen.getByTestId("infobox-container-testid");
    expect(container).toMatchSnapshot();
  });
});
