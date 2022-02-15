import React, { useRef, useEffect, useContext } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { BudgetContext } from "../../context/budget-context";
import Form from "./Form/Form";
import TransactionList from "../TransactionList";
//import TransactionList from "./List/TransactionList";
/* import InfoCard from "../InfoCard";
import { Button } from "@chakra-ui/button";

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui"; */

const Main = () => {
  const { balance } = useContext(BudgetContext);
  //const { speechState } = useSpeechContext();
/*   const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]); */
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
      //justifyContent="space-between"
      //bg="yellow.200"
      width="98%"
      pt={2}
    >
      <Heading
        //ref={main}
        textAlign="center"
        padding={2}
        as="h4"
        size="lg"
        fontFamily="Work sans bold"
        color="gray.100"
        border="2px solid #A0AEC0"
        width="97%"
      >
        Balance: ₹{balance}{" "}
      </Heading>

      <Box
        d="flex"
        flexDir="column"
        /* bg="green.200" */ width="97%"
        justifyContent="center"
        alignItems="center"
        marginBottom="4px"
        gap="0.5em"
        //border="2px solid #A0AEC0"
        //p={2}

      >
        <Form/>
      </Box>

      <Box width="100%" ><TransactionList /></Box>

    </Box>
  );
};

export default Main;


