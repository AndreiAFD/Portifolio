import React from "react";
import { render, screen } from "@testing-library/react";
import { BadgeText } from ".";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";

const ComponentToTest = () => {
  return (
    <AppThemeContextProvider>
      <BadgeText color="blue">Testing</BadgeText>
    </AppThemeContextProvider>
  );
};

describe("BadgeText component", () => {
  it("should render correctly", () => {
    render(<ComponentToTest />);
    const badgeRendered = screen.getByTestId("badge-text-testid");
    expect(badgeRendered).toMatchSnapshot();
  });
});
