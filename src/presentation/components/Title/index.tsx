import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps) => {
  return (
    <Box
      borderBottom="3px solid"
      borderBottomColor="blue"
      display="inline-block"
      textAlign="right"
      paddingLeft="7%"
    >
      <Text fontSize={["27px"]} fontWeight="bold" color="blue">
        {label}
      </Text>
    </Box>
  );
};
