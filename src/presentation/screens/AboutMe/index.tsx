import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Title } from "../../components/Title";
import { techs } from "../../../core/texts/aboutme";
import { BadgeText } from "../../components/BadgeText";
import FadeIn from "react-fade-in";

export const AboutMe = () => {
  const DEFAULT_DELAY = 100;

  return (
    <FadeIn>
      <Box
        height="100%"
        data-testid="aboutme-container-testid"
        paddingTop="59px"
        boxShadow={"-4px 4px 8px #00000050"}
        background="white"
        borderRadius="20px"
        paddingBottom="65px"
      >
        <Title label="Quem sou eu ?" />
        <FadeIn>
          <Text margin="33px 75px" fontWeight="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius ac libero a rhoncus. Praesent nibh nunc, accumsan eget
            sollicitudin et, molestie at mauris. In placerat, tellus in congue
            fermentum, neque elit feugiat orci, eu pretium leo est eget lorem.
          </Text>
        </FadeIn>
        <FadeIn delay={400}>
          <Text margin="0px 75px 70px" fontWeight="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius ac libero a rhoncus. Praesent nibh nunc, accumsan eget
            sollicitudin et, molestie at mauris. In placerat, tellus in congue
            fermentum, neque elit feugiat orci, eu pretium leo est eget lorem.
          </Text>
        </FadeIn>
        <Title label="Principais Techs" />
        <Flex gap="15px" margin="0 75px" marginTop="30px" flexWrap="wrap">
          {techs.map((tech, index) => {
            return (
              <FadeIn delay={DEFAULT_DELAY * index}>
                <BadgeText color="blue">{tech}</BadgeText>
              </FadeIn>
            );
          })}
        </Flex>
      </Box>
    </FadeIn>
  );
};
