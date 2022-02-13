import React, { useState, useEffect, useContext } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
//import { useSpeechContext } from '@speechly/react-client';
import { BudgetContext } from "../../context/budget-context";
import Form from "./Form/Form";
import TransactionList from "./List/TransactionList";
import InfoCard from "../InfoCard";
import { Button } from "@chakra-ui/button";

const Main = () => {
  const { balance } = useContext(BudgetContext);

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
          style={{ lineHeight: "1.5em", marginTop: "3px" }}
          paddingBottom={4}
          borderBottom="2px solid #A0AEC0"
          color="gray.200"
          fontWeight="bold"
        >
          <InfoCard /* style={{  paddingBottom: "10px"}} */ />
        </Text>
      </Box>

      <Box
        d="flex"
        /* bg="green.200" */ width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Form mt={1} />
      </Box>

      <Box width="98.5%">
        <Button
          fontWeight="bold"
          fontSize="lg"
          variant="solid"
          colorScheme="purple"
          width="100%"
          style={{ marginBottom: "0.25em", padding: ".8em" }}
          onClick={() => {}}
        >Transaction List</Button>
      </Box>
    </Box>
  );
};

export default Main;

/* <Box
  width="100%"
  d="flex"
  alignItems="center"
  justifyContent="center"
  bg="blue.200"
>
  <TransactionList />
</Box>; */
