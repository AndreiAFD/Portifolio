import React from "react";
import { Button, Image, Link } from "@chakra-ui/react";
import { DefaultTheme, useTheme } from "styled-components";

interface BadgeLinkProps {
  color: keyof DefaultTheme;
  children: any;
  iconSrc?: string;
  url?: string;
}

export const BadgeLink = ({
  color,
  children,
  iconSrc,
  url,
}: BadgeLinkProps) => {
  const theme = useTheme();

  return (
    <Button
      _hover={{
        boxShadow: "2px 2px 4px #00000050",
      }}
      border="1px solid"
      borderColor={theme[color]}
      flex={0.5}
      borderRadius="20px"
      padding="0"
      background={theme[color]}
      overflow="hidden"
      height="2rem"
      data-testid="badgelink-container-testid"
    >
      <Link
        href={url}
        target="_blank"
        _hover={{ outline: "none" }}
        color="white"
        display="flex"
        gap="8px"
        padding="1px 3px"
        fontWeight="normal"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        data-testid="badgelink-testid"
      >
        <Image src={iconSrc} width="1.3rem" marginTop="-3px" />

        {children}
      </Link>
    </Button>
  );
};
