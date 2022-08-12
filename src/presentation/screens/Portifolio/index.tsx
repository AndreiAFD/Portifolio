import { Box } from "@chakra-ui/react";
import React from "react";
import FadeIn from "react-fade-in";
import { ProfissionalExperience } from "../../components/ProfissionalExperience";
import { Title } from "../../components/Title";

export const Portifolio = () => {
  return (
    <FadeIn>
      <Box
        height="100%"
        data-testid="portifolio-container-testid"
        paddingTop="59px"
        boxShadow={"-4px 4px 8px #00000050"}
        background="white"
        borderRadius="20px"
        paddingBottom="65px"
      >
        <Title label="Experiências profissionais" />
        <ProfissionalExperience />
      </Box>
    </FadeIn>
  );
};
