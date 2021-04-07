import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Switch, Route, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DrawerChart = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
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
        onClick={onOpen}
      >
        <FontAwesomeIcon size="2x" icon={faBars}></FontAwesomeIcon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Choose an option</DrawerHeader>

            <DrawerBody>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                    >
                      {isOpen ? "Close" : "By region"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => history.push("/chart")}>
                        South America
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
