import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BadgeText } from "../BadgeText";
import FadeIn from "react-fade-in";

interface ProfissionalExperienceProps {
  companyName: string;
  branch: string;
  serviceTime: string;
  responsabilities: string[];
}

export const ProfissionalExperience = ({
  companyName = "Redfox Soluçoes digitais",
  branch = "Saúde",
  serviceTime = "1 ano e 3 mêses",
  responsabilities = [
    "Desenvolver sistemas web e mobile para gerenciamento de grupos de hospitais.",
    "Alinhamento e idealização do projeto com o cliente.",
    "Inicialização e estruturação de projetos do zero.",
    "Code Review e refatoração de código.",
  ],
}: Partial<ProfissionalExperienceProps>) => {
  return (
    <Box marginLeft={["66px"]} marginTop="60px">
      <FadeIn delay={200}>
        <Flex>
          <Text fontWeight="bold" fontSize={["22px"]} marginRight="25px">
            {companyName}
          </Text>
          <BadgeText color="purple"> Tempo de serviço encerrado</BadgeText>
        </Flex>

        <Flex alignItems="center" marginTop="15px">
          <Text marginRight="20px">Ramo: </Text>
          <BadgeText color="blue"> {branch}</BadgeText>
        </Flex>
        <Flex alignItems="center" marginTop="15px">
          <Text marginRight="20px">Tempo de serviço: </Text>
          <BadgeText color="blue"> {serviceTime}</BadgeText>
        </Flex>
        <Text marginTop="15px">Responsabilidades:</Text>
        {responsabilities.map((text) => (
          <Text marginTop="10px" marginLeft="20px" color="GrayText">
            {text}
          </Text>
        ))}
        <Text fontWeight="bold" marginTop="23px">
          Projetos
        </Text>
      </FadeIn>
    </Box>
  );
};
