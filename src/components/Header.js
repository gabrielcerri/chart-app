import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { DrawerChart } from "./DrawerChart";

export const Header = () => {
  return (
    <Flex
      minH="5rem"
      w="full"
      bg="black"
      direction="row"
      justify="space-between"
      align="center"
      p="1rem 3rem"
    >
      <DrawerChart />
      <Text color="white" as="samp" fontSize="2xl">
        📊 chart country population 📊
      </Text>
    </Flex>
  );
};
