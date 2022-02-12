import React, { useContext } from "react";
import { BudgetContext } from "../../../context/budget-context";
import { Box, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

import { List, ListItem, ListIcon } from "@chakra-ui/react";

const TransactionList = () => {
  const { /* transactions */ deleteTransaction } = useContext(BudgetContext);
  const transactions = [
    {
      amount: 120,
      category: "Travel",
      type: "Expense",
      date: "2022-01-30",
      id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
    },

    {
      amount: 420,
      category: "Rent",
      type: "Expense",
      date: "2022-01-31",
      id: "365a4ebd-9892-4471-ad55-36077e4121a9",
    },

    {
      amount: 300,
      category: "Savings",
      type: "Income",
      date: "2022-01-29",
      id: "ef090181-21d1-4568-85c4-5646232085b2",
    },
    {
      amount: 105,
      category: "Savings",
      type: "Income",
      date: "2022-01-28",
      id: "037a35a3-40ec-4212-abe0-cc485a98aeee",
    },
  ];

  return (
    <Box d="flex" width="100%" bg="teal.600"> 
      <List d="flex" flexDir="column" bg="orange.500"
        colorScheme="purple"
        style={{ maxHeight: "170px", overflow: "auto" }}
      >
        {transactions.map((transaction) => (
          <Box key={transaction.id} d="flex" width="80%" bg="red.300">
            <ListItem
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              bg="green.400"
              width="98%"
            >
              <Box d="flex" width="70%" alignItems="center" bg="yellow.300">
                {transaction.amount}
              </Box>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
