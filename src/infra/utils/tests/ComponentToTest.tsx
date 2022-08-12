import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../../presentation/components/Header";
import { AppThemeContextProvider } from "../../contexts/ThemeContext";

export const ComponentToTest = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <AppThemeContextProvider>
        <Header />
        {children}
      </AppThemeContextProvider>
    </BrowserRouter>
  );
};
