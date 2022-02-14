import React, { useContext } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { BudgetContext } from "../context/budget-context";
import { useNavigate } from "react-router-dom";

const Alerts = () => {
  const { user } = useContext(BudgetContext);
  const navigate = useNavigate();

  const alertHandler = () => {
    //console.log("Alert Handler");
    if(user){
      navigate("/transactions")
    }else if (!user){
      navigate("/")
    }
  }

  return (
    <Container maxW="xl" centerContent margin="auto">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
        height="390px"
        bg="purple.900"
        //color="yellow.300"
        borderRadius="16px"
        borderWidth="2px"
        borderColor="black"
        p={6}
        gap="1em"
      >
        <AlertIcon boxSize="45px" mr={0}  color="pink.600" />
        <AlertTitle  fontSize={{base:"2xl", md:"3xl"}} color="red.50" fontFamily="Work sans bold" width="100%" style={{ lineHeight: "1.2em"}}>
          Oops !! Something Went Wrong 😵
        </AlertTitle>
        <AlertDescription maxWidth="lg" fontSize={{base:"lg", md:"xl"}} color="gray.300" >
          Just a Moment. Working on it ⌛
        </AlertDescription>
        <Spinner
          thickness="6px"
          speed="0.99s"
          emptyColor="gray.200"
          color="pink.600"
          size="xl"
        />
        <AlertDescription  maxWidth="md" color="gray.400">
          ( Still ⌛ Click on the Button Below ⬇️ )
        </AlertDescription>
        <Button
          width="100%"
          fontWeight="bold"  
          variant="ghost"
          bg="pink.600"
          color="white"
          mt={1}
          p={1.5}
          borderColor="black"
          onClick={alertHandler}
          _hover={{ background: "yellow.300", color: "black" }}
          _active={{ background: "yellow.300", color: "black" }}
        >
          {user ? "Continue Managing Budget" : "Please Login First"}
        </Button>
      </Alert>
    </Container>
  )
}

export default Alerts