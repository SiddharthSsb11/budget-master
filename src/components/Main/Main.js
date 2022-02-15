import React, { useState, useEffect, useContext } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
//import { useSpeechContext } from '@speechly/react-client';
import { BudgetContext } from "../../context/budget-context";
import Form from "./Form/Form";
//import TransactionList from "./List/TransactionList";
import InfoCard from "../InfoCard";
import { Button } from "@chakra-ui/button";

const Main = () => {
  const { balance } = useContext(BudgetContext);

 /*  const transactionsHandler = ()=>{
    //console.log("Transactions List")
    return isOpen
  } */
  return (
    <Box
      d="flex"
      flexDir="column"
      alignItems="center"
      gap="1em"
      justifyContent="space-between"
      //bg="yellow.200"
      width="98%"
      pt={1}
    >
      <Heading
        textAlign="center"
        paddingBottom={2}
        as="h4"
        size="lg"
        fontFamily="Work sans bold"
        color="gray.100"
        borderBottom="2px solid #A0AEC0"
        width="97%"
      >
        Balance: ₹{balance}{" "}
      </Heading>

      <Box /* bg="red.200" */ width="97%">
        <Text
          style={{ lineHeight: "1.3em", marginTop: "1px" }}
          paddingBottom={4}
          borderBottom="2px solid #A0AEC0"
          color="gray.200"
          //fontWeight="bold"
        >
          <InfoCard /* style={{  paddingBottom: "10px"}} */ />
        </Text>
      </Box>

      <Box
        d="flex"
        /* bg="green.200" */ width="100%"
        justifyContent="center"
        alignItems="center"
        marginBottom="4px"
      >
        <Form mt={1} />
      </Box>
    </Box>
  );
};

export default Main;
