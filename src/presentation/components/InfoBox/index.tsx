import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import PerfilImg from "../../assets/images/perfil.jpeg";
import { BadgeText } from "../BadgeText";
import { BadgeLink } from "../BadgeLink";
import Linkedin from "../../assets/icons/linkedin.png";
import WhatsApp from "../../assets/icons/whatsapp.png";
import { SizeProps, Title } from "../Title";

export const InfoBox = () => {
  return (
    <Box
      width="100%"
      // height="100%"
      background="#ffffff"
      boxShadow={"-4px 4px 8px #00000050"}
      padding="36px"
      display={["none", "none", "block"]}
      borderRadius="20px"
      data-testid="infobox-container-testid"
    >
      <Flex width="100%" alignItems="center" justifyContent="center">
        <Avatar
          src={PerfilImg}
          size="full"
          maxWidth="250px"
          maxHeight="250px"
          margin="0 25%"
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" marginTop="46px">
        <Text fontSize="22px" fontWeight="500">
          Andrei Amaral
        </Text>
        <BadgeText color="blue">Disponível</BadgeText>
      </Flex>

      <Text marginTop="16px" fontSize="15px" marginBottom="25px">
        Desenvolvedor frontend autônomo apaixonado por tecnologia.
      </Text>
      <Title size={SizeProps.md} label="Informações de contato" />

      <Flex marginTop="15px">
        <Text
          fontSize="16px"
          fontWeight="regular"
          marginRight="5px"
          color="GrayText"
        >
          Email:
        </Text>
        <Text fontSize="16px" fontWeight="regular">
          andrei.frontdev@gmail.com
        </Text>
      </Flex>
      <Flex marginTop="9px">
        <Text
          fontSize="16px"
          fontWeight="regular"
          marginRight="5px"
          color="GrayText"
        >
          Celular e WhatsApp:{" "}
        </Text>
        <Text fontSize="16px">+55 11 99240 5312 </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap={3}
        marginTop="27px"
      >
        <BadgeLink
          color="blue"
          iconSrc={Linkedin}
          url="https://www.linkedin.com/in/andrei-amaral-327493191/"
        >
          Linkedin
        </BadgeLink>
        <BadgeLink color="green" iconSrc={WhatsApp}>
          WhatsApp
        </BadgeLink>
      </Flex>
    </Box>
  );
};
