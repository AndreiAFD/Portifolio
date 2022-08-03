import React from "react";
import { Header } from "./presentation/components/Header";
import { GlobalStyles } from "./core/styles/global-styles";
import { AppThemeContextProvider } from "./infra/contexts/ThemeContext";
import { AppRoutes } from "./infra/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <AppThemeContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeContextProvider>
    </div>
  );
}

export default App;
