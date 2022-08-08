import React from "react";
import { GlobalStyles } from "./global-styles";

describe("GlobalStyles", () => {
  it("should render correctly", () => {
    expect(GlobalStyles).toMatchSnapshot();
  });
});
