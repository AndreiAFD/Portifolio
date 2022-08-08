import React, { createContext, useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../core/theme/theme";

enum ThemeEnum {
  light = "light",
  dark = "dark",
}

interface AppThemeContextProps {
  theme?: string;
  handleChangeTheme?: (theme: ThemeEnum) => void;
}

export const AppThemeContext = createContext<AppThemeContextProps>({});

export const AppThemeContextProvider = ({ children }: { children: any }) => {
  const [actualTheme, setActualTheme] = useState<ThemeEnum>(ThemeEnum.light);

  const chakraTheme = extendTheme({
    colors: {
      ...theme[actualTheme],
    },
  });

  const handleChangeTheme = (nextTheme: ThemeEnum) => {
    setActualTheme(nextTheme);
  };

  return (
    <AppThemeContext.Provider
      value={{
        theme: actualTheme,
        handleChangeTheme,
      }}
    >
      <ThemeProvider theme={theme[actualTheme] as typeof theme["dark"]}>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};
