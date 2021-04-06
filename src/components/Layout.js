import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Home } from "./Home";
export const Layout = () => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex flex={1} justify="center" align="center" direction="column">
      {" "}
      <Home />
    </Flex>
  </Flex>
);
