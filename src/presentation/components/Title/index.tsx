import { Box, Text } from "@chakra-ui/react";
import React from "react";

export enum SizeProps {
  sm = "16px",
  md = "16px",
  lg = "27px",
}

interface TitleProps {
  label: string;
  size?: SizeProps;
}

export const Title = ({ label, size = SizeProps.lg }: TitleProps) => {
  return (
    <Box
      borderBottom="1px solid"
      borderBottomColor="blue"
      display="inline-block"
      textAlign="right"
      paddingLeft="7%"
    >
      <Text fontSize={size} fontWeight="bold" color="blue">
        {label}
      </Text>
    </Box>
  );
};
