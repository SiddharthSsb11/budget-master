import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BudgetContext } from "../context/budget-context";
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
import { Icon, Badge, Heading } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HeaderBar = () => {

  const navigate = useNavigate();
  const toast = useToast();

  const { balance, user } = useContext(BudgetContext);

  const { isOpen, onOpen, onClose } = useDisclosure();


  const logoutHandler = () => {
    signOut(auth);

    toast({
      title: "Logout Successful",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });

    onClose();
    navigate("/");
  };

  return (
    <React.Fragment>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p="0.32em 2em"
        borderWidth="0.2em"
        borderColor="gray.300"
        bg="#0F3057"
      >
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="3px"
          cursor="pointer"
        >
          <Icon
            as={FaMicrophone}
            w={{ base: 8, md: 10 }}
            h={{ base: 8, md: 10 }}
            color="gray.200"
            _hover={{ color: "purple.200" }}
          />
          <Box
            d={{ base: "none", md: "flex" }}
            flexDir="column"
            alignItems="start"
            gap="2px"
          >
            <Badge
              variant="solid"
              colorScheme="gray"
              fontSize="xs"
              _hover={{ background: "purple.100", color: "gray.800" }}
            >
              Powered by
            </Badge>
            <Badge
              variant="solid"
              colorScheme="gray"
              fontSize="sm"
              _hover={{ background: "purple.100", color: "gray.800" }}
            >
              {" "}
              Speechly
            </Badge>
          </Box>
        </Box>

        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          cursor="pointer"
          color="gray.200"
          fontFamily="Work sans bold"
          _hover={{ color: "purple.100" }}
        >
          Budget Master
        </Text>
        {!user ? (
          <Button
            fontWeight="bold"
            colorScheme="pink"
            //style={{ marginTop: "15px" }}
            onClick={()=>navigate('/')}
          >
            Login
          </Button>
        ) : (
          <Avatar
            fontWeight="bold"
            fontFamily="Work sans bold"
            size="md"
            cursor="pointer"
            borderColor="black"
            borderWidth="2px"
            bg="purple.400"
            color="black"
            //name={user.displayName || user.name || null}
            //name={user.name}
            _hover={{ background: "pink.600", color: "gray.200" }}
            _active={{ background: "pink.600", color: "gray.200" }}
            onClick={onOpen}
          />
        )}
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent /* fontFamily="Work sans bold" */ bg="purple.100">
          <DrawerHeader
            textAlign="center"
            borderBottom="2px solid white"
            fontSize="2xl"
            bg="#0F3057"
            color="gray.200"
          >
            <Heading as="h2" size="xl" fontFamily="Work sans bold">
              W E L C O M E
            </Heading>
          </DrawerHeader>
          <DrawerBody
            d="flex"
            flexDir="column"
            alignItems="center"
            gap="1.2em"
            justifyContent="start"
          >
            <Avatar
              marginTop="5px"
              fontWeight="bold"
              size="2xl"
              cursor="pointer"
              borderColor="black"
              borderWidth="2px"
              bg="pink.600"
              color="gray.100"
              //src={user.photoURL}
              //name={user.name}
              fontFamily="Work sans bold"
              _hover={{ background: "purple", color: "gray.200" }}
            />

            <Box
              d="flex"
              flexDir="column"
              gap="0.6em"
              textAlign="center"
              fontFamily="Work sans bold"
            >
              <Heading
                as="h3"
                size="lg"
                fontFamily="Work sans bold"
                color="gray.700"
              >
                {/* user.displayName || user.email || "" */}
                {user.email}
              </Heading>
            </Box>
            <Badge
              variant="solid"
              bg="purple"
              fontSize="lg"
              p={2}
              width="100%"
              borderRadius="10px"
              fontWeight="bold"
              cursor="pointer"
              textAlign="center"
              _hover={{ color: "pink.100" }}
            >
              Balance - ₹{balance}
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
              p={4}
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
