import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../core/theme/theme";

enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export const AppThemeContext = createContext({});

export const AppThemeContextProvider = ({ children }: { children: any }) => {
  const [actualTheme, setActualTheme] = useState<ThemeEnum>(ThemeEnum.light);

  const chakraTheme = extendTheme({
    colors: {
      ...theme[actualTheme],
    },
  });

  return (
    <AppThemeContext.Provider value={{}}>
      <ThemeProvider theme={theme[actualTheme]}>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};
