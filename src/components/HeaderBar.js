import React, { useState, useContext } from "react";
//import { useNavigate } from "react-router-dom";
//import {BudgetContext} from "../../context/budget-context";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
//import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Icon, Badge, Heading } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
import { Avatar } from "@chakra-ui/avatar";
//import axios from "axios";
//import { useToast } from "@chakra-ui/toast";

const HeaderBar = () => {
  //const { user } = useContext(BudgetContext);

  //const navigate = useNavigate();
  //const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    //localStorage.removeItem("userInformation");
    //navigate("/");
    console.log("Logout");
  };

  /* const clickHandler = () => {
    console.log("avatar click");
  }; */

  return (
    <React.Fragment>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p="0.32em 2em"
        borderWidth="0.35em"
        borderColor="gray.300"
        bg="#0F3057"
        fontFamily="Work sans bold"
      >
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="4px"
        >
          <Icon as={FaMicrophone} w={10} h={10} color="gray.200" />
          <Box d="flex" flexDir="column" alignItems="start" gap="5px">
            <Badge variant="solid" colorScheme="gray" fontSize="10px">
              Powered by
            </Badge>
            <Badge variant="solid" colorScheme="gray" fontSize="10px">
              {" "}
              Speechly
            </Badge>
          </Box>
        </Box>

        <Text fontSize="4xl" fontWeight="bold" color="gray.200">
          Budget Master
        </Text>
        <Avatar
          fontWeight="bold"
          size="md"
          cursor="pointer"
          borderColor="black"
          borderWidth="2px"
          bg="purple.200"
          color="black"
          //src={user.photoURL || user.name}
          //name={user.name}
          name="S B"
          _hover={{ background: "pink.600", color: "gray.200" }}
          onClick={onOpen}
        />
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent fontFamily="Work sans bold" bg="purple.100">
          <DrawerHeader
            textAlign="center"
            borderBottom="2px solid white"
            fontSize="2xl"
            bg="#0F3057" color="gray.200"
          >
            <Heading as='h2' size='xl' fontFamily="Work sans bold">W E L C O M E</Heading>
          </DrawerHeader>
          <DrawerBody
            d="flex"
            flexDir="column"
            alignItems="center"
            gap="1.2em"
            justifyContent="space-evenly"
          >
            
            <Avatar
              fontWeight="bold"
              size="2xl"
              w={230}
              h={230}
              cursor="pointer"
              borderColor="black"
              borderWidth="2px"
              bg="pink.600"
              color="gray.100"
              //src={user.photoURL || user.name}
              //name={user.name}
              name="S B"
            />

            <Box d="flex" flexDir='column' gap="0.7em" textAlign='center'>
              <Heading as="h3" size="lg" fontFamily="Work sans bold">
                Siddharth Singh
              </Heading>
              <Text fontSize="lg" color="gray.600">
                <u>testExample@test.com</u>
              </Text>
            </Box>
            <Badge
              variant="solid"
              bg="#542E71"
              fontSize="xl"
              p={3}
              width="100%"
              borderRadius="10px"
              fontWeight="bold"
              //textAlign="center"
            >
              Your Balance - ₹30419
            </Badge>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="solid"
              onClick={logoutHandler}
              width="100%"
              fontWeight="bold"
              colorScheme="pink"
              fontSize="xl"
              p={6}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default HeaderBar;
