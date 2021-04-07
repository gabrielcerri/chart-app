import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex flex={1} justify="center" align="center" direction="column">
      {" "}
      {children}
    </Flex>
  </Flex>
);
