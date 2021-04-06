import { Flex, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <Flex
      minH="5rem"
      w="full"
      bg="black"
      direction="row"
      justify="center"
      align="center"
      p="1rem 3rem"
    >
      <Button
        cursor="pointer"
        bg="black"
        color="white"
        _active={{
          bg: "#beb6b6",
          borderColor: "none",
        }}
        _focus={{
          outline: "none",
        }}
        _hover={{
          bg: "#464545",
        }}
      >
        <FontAwesomeIcon size="2x" icon={faBars}></FontAwesomeIcon>
      </Button>
      <Text color="white" as="samp" fontSize="2xl">
        📊 chart country population 📊
      </Text>
    </Flex>
  );
};
