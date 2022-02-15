import React, { useContext } from "react";
import { BudgetContext } from "../context/budget-context";
import { Box, Text } from "@chakra-ui/layout";
import { Icon, Circle } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaRupeeSign } from "react-icons/fa";
import { List, ListItem, IconButton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(BudgetContext);
  const toast = useToast();

  const deleteHandler = (id) => {
    console.log("delete clicked", id);
    deleteTransaction(id);
    //() => deleteTransaction(transaction.id);
    toast({
      title: "Transaction Deleted",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
  };

  return (
    <List
      d="flex"
      flexDir="column"
      gap="0.8em"
      //py={1}
      px={2}
      alignItems="center"
      justifyContent="start"
      maxH="14em"
      overflow="auto"
      //bg="purple.500"
      width="100%"
      borderRadius="0.45em"
      //border="1px solid black"
    >
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="0.4em"
          border="1px solid black"
          bg="yellow.300"
          width="100%"
          p={1.5}
          
          cursor="pointer"
          _hover={{ background: "yellow.400" }}
        >
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="6px"
          >
            <Circle
              size="50px"
              bg={transaction.type === "Income" ? "green.500" : "red.500"}
              color="white"
              fontSize="xl"
            >
              <Icon as={FaRupeeSign} />
            </Circle>
            <Box
              d="flex"
              flexDir="column"
              alignItems="start"
              alignSelf="start"
              gap="1.75px"
            >
              <Text fontWeight="bold" fontSize="lg">
                {transaction.category}
              </Text>
              <Text fontWeight="bold" fontSize="xs">
                {`₹${transaction.amount}, ${transaction.date}`}
              </Text>
            </Box>
          </Box>
          <IconButton
            variant="ghost"
            bg="gray.700"
            color="white"
            size="lg"
            fontSize="2xl"
            _hover={{ background: "gray.800", color: "red.500" }}
            aria-label="Delete Transaction"
            icon={<DeleteIcon />}
            onClick={deleteHandler.bind(null, transaction.id)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;
