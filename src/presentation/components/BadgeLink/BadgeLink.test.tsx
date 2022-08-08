import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BadgeLink } from ".";
import { AppThemeContextProvider } from "../../../infra/contexts/ThemeContext";

const ComponentToTest = () => {
  return (
    <AppThemeContextProvider>
      <BadgeLink url="https://google.com" color="blue">
        Testing Google link
      </BadgeLink>
    </AppThemeContextProvider>
  );
};

describe("BadgeLink component", () => {
  it("should render correctly", () => {
    render(<ComponentToTest />);
    const badgeLink = screen.getByTestId("badgelink-container-testid");
    expect(badgeLink).toMatchSnapshot();
  });
  it("should navigate to url", () => {
    render(<ComponentToTest />);
    const link = screen.getByTestId("badgelink-testid");
    fireEvent.click(link);
  });
});
