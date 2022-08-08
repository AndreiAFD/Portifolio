import { Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { RoutePaths } from "../../../infra/routes/paths";
import * as S from "./styles";

export const TitleHeader = () => {
  const { pathname } = useLocation();
  const [animate, setAnimate] = useState<boolean>(true);

  const getCurrentPageName = useCallback(() => {
    if (pathname === RoutePaths.about) {
      return (
        <Text
          color="white"
          fontWeight="bold"
          fontSize={28}
          marginLeft="2%"
          marginTop="25px"
          animation="from-left-about 0.7s forwards"
        >
          Sobre mim
        </Text>
      );
    }
    if (pathname === RoutePaths.portifolio) {
      return (
        <Text
          color="white"
          fontWeight="bold"
          fontSize={28}
          marginLeft="2%"
          marginTop="25px"
          animation="from-left-portifolio 0.7s forwards"
        >
          Portifólio
        </Text>
      );
    }

    if (pathname === RoutePaths.contact) {
      return (
        <Text
          color="white"
          fontWeight="bold"
          fontSize={28}
          marginLeft="2%"
          marginTop="25px"
          animation="from-left-contact 0.7s forwards"
        >
          Contato
        </Text>
      );
    }
  }, [pathname]);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 800);
    }
  }, [animate]);

  return (
    <S.Container
      className={animate ? "animate" : ""}
      data-testid="TitleHeader-container-testid"
    >
      {getCurrentPageName()}
    </S.Container>
  );
};
