import { render } from "@testing-library/react";
import React from "react";
import { Portifolio } from ".";
import { ComponentToTest } from "../../../infra/utils/tests/ComponentToTest";

describe("Portifolio screen", () => {
  it("should render correctly", () => {
    render(
      <ComponentToTest>
        <Portifolio />
      </ComponentToTest>
    );
  });
});
