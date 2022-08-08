import React from "react";
import { Text } from "@chakra-ui/react";
import { DefaultTheme, useTheme } from "styled-components";

interface BadgeTextProps {
  color: keyof DefaultTheme;
  children: any;
}

export const BadgeText = ({ color, children }: BadgeTextProps) => {
  const theme = useTheme();

  return (
    <Text
      border="1px solid"
      borderColor={theme[color]}
      color={theme[color]}
      display="inline-block"
      padding="1px 10px"
      borderRadius="20px"
      data-testid="badge-text-testid"
    >
      {children}
    </Text>
  );
};
