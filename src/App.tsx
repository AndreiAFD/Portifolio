import React from "react";
import FadeIn from "react-fade-in";
import { Header } from "./presentation/components/Header";
import { GlobalStyles } from "./core/styles/global-styles";
import { AppThemeContextProvider } from "./infra/contexts/ThemeContext";
import { AppRoutes } from "./infra/routes";
import { BrowserRouter } from "react-router-dom";
import { TitleHeader } from "./presentation/components/TitleHeader";
import { InfoBox } from "./presentation/components/InfoBox";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="root">
      <AppThemeContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <TitleHeader />
          <Flex height="100%" justifyContent={"center"} gap="5%">
            <Box
              position="relative"
              width="30%"
              marginTop="-87px"
              maxW="393px"
              marginBottom="20px"
            >
              <FadeIn>
                <InfoBox />
              </FadeIn>
            </Box>

            <Box position="relative" width="60%" marginTop="-87px">
              <AppRoutes />
            </Box>
          </Flex>
        </BrowserRouter>
      </AppThemeContextProvider>
    </div>
  );
}

export default App;
