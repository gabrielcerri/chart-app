import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex direction="column">
      <Heading as="h1" size="4xl" isTruncated>
        {" "}
        🗺️ ¡Welcome to chart-country-population! 🗺️{" "}
      </Heading>
    </Flex>
  );
};
