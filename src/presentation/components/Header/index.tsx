import React, { useCallback } from "react";
// import {} from "";
import * as S from "./styles";
import { Text, useTheme } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

enum PathNamesEnum {
  aboutme = "/",
  portifolio = "/portifolio",
  contato = "/contact",
}

export const Header = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <S.Container>
      <Text fontWeight="bold" alignItems="center" display="flex" color="text">
        <Text marginTop="0" marginRight="4px" color="blue">
          {"<"}
        </Text>
        Frontend Developer
        <Text marginTop="2px" marginLeft="4px" color="blue">
          {"/"}
        </Text>
        <Text marginTop="0" color="blue">
          {">"}
        </Text>
      </Text>

      <S.MenuWrapper>
        <S.MenuItemContainer
          className={pathname === PathNamesEnum.aboutme ? "active" : ""}
        >
          <Text color="blue" fontWeight="bold">
            <Link to="/">Sobre</Link>
          </Text>
        </S.MenuItemContainer>
        <S.MenuItemContainer
          className={pathname === PathNamesEnum.portifolio ? "active" : ""}
        >
          <Text color="blue" fontWeight="bold">
            <Link to="/portifolio">Portifolio</Link>
          </Text>
        </S.MenuItemContainer>
        <S.MenuItemContainer
          className={pathname === PathNamesEnum.contato ? "active" : ""}
        >
          <Text color="blue" fontWeight="bold">
            <Link to="/contact">Contato</Link>
          </Text>
        </S.MenuItemContainer>
      </S.MenuWrapper>
    </S.Container>
  );
};
