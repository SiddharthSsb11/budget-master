import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BudgetContext } from "../context/budget-context";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { Icon, Badge, Heading, Square } from "@chakra-ui/react";
import { FaBalanceScale } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HeaderBar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { balance, user, transactions } = useContext(BudgetContext);

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
        //bg="#0F3057"
        bg="purple.900"
      >
        <Box
          d="flex"
          alignItems="center"
          //justifyContent="space-between"
          gap="5px"
          cursor="pointer"
        >
          <Icon
            as={GiTakeMyMoney}
            w={{ base: 8, md: 12 }}
            h={{ base: 8, md: 12 }}
            color="gray.200"
            _hover={{ color: "pink.200" }}
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
              _hover={{ background: "pink.300", color: "gray.800" }}
            >
              Manage
            </Badge>
            <Badge
              variant="solid"
              colorScheme="gray"
              fontSize="sm"
              _hover={{ background: "pink.300", color: "gray.800" }}
            >
              {" "}
              Save Grow
            </Badge>
          </Box>
        </Box>

        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          cursor="pointer"
          color="gray.200"
          fontFamily="Work sans bold"
          _hover={{ color: "pink.200" }}
        >
          Budget Master
        </Text>
        {!user ? (
          <Button
            fontWeight="bold"
            colorScheme="pink"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
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
        <DrawerContent /* fontFamily="Work sans bold" */ bg="purple.200">
          <DrawerHeader
            textAlign="center"
            borderBottom="2px solid white"
            //fontSize="2xl"
            //bg="#0F3057"
            bg="purple.900"
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
            gap="1em"
            justifyContent="space-evenly"
          >
            <Avatar
              //marginTop="2px"
              //fontWeight="bold"
              size="2xl"
              cursor="pointer"
              borderColor="black"
              borderWidth="2px"
              bg="purple.800"
              //w={36}
              //h={36}
              //color="gray.100"
              //src={user.photoURL}
              //name={user.name}
              _hover={{ background: "pink.600", color: "gray.200" }}
            />

            <Heading
              as="h3"
              size="md"
              fontFamily="Work sans bold"
              textDecoration="underline"
              color="gray.800"
            >
              {/* user.displayName || user.email || "" */}
              {user.email}
            </Heading>

            <Box
              d="flex"
              flexDir="column"
              bg="purple.900"
              gap="4px"
              alignItems="center"
              borderRadius="7px"
              width="100%"
              justifyContent="center"
              pb={3}
              border="1.5px solid black"
              cursor="pointer"
              _hover={{bg:"purple.800"}}
            >
              <Icon
                as={FaBalanceScale}
                fontweight="bold"
                //fontSize="10xl"
                w={28}
                h={28}
                color="white"
                //cursor="pointer"
              ></Icon>
              <Badge
                variant="solid"
                bg="pink.500"
                fontSize="md"
                p={1.5}
                width="90%"
                borderRadius="7px"
                fontWeight="bold"
                textAlign="center"
              >
                Balance: ₹{balance}
              </Badge>
            </Box>

            <Box
              d="flex"
              flexDir="column"
              bg="purple.900"
              gap="4px"
              alignItems="center"
              borderRadius="7px"
              width="100%"
              justifyContent="center"
              pb={3}
              border="1.5px solid black"
              cursor="pointer"
              _hover={{bg:"purple.800"}}
            >
              <Box d="flex" alignItems="center" justifyContent="space-between" width="84%" p={3}>
                <Square
                  size="84px"
                  bg="green.500"
                  color="white"
                  borderRadius="6px"
                  fontSize="6xl"
                >
                  <GiReceiveMoney/>
                </Square>
                <Square
                  size="84px"
                  bg="red.500"
                  color="white"
                  borderRadius="6px"
                  fontSize="6xl"
                >
                  <GiPayMoney />
                </Square>
              </Box>
              <Badge
                variant="solid"
                bg="pink.500"
                fontSize="md"
                p={1.5}
                width="90%"
                borderRadius="7px"
                fontWeight="bold"
                textAlign="center"
              >
                Total Transactions: {transactions.length}
              </Badge>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="solid"
              onClick={logoutHandler}
              width="100%"
              fontWeight="bold"
              colorScheme="pink"
              //bg="purple.800"
              fontSize="xl"
              color="gray.200"
              p={1.5}
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
