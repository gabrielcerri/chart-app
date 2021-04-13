import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex direction="column">
      <Heading as="h1" size="4xl" isTruncated>
        {" "}
        🗺️ ¡Welcome to chart-country-population! 🗺️{" "}
      </Heading>

      <Text justifyContent="center" marginTop="5">
        {" "}
        Click on the menu to see the charts by region
      </Text>
    </Flex>
  );
};
