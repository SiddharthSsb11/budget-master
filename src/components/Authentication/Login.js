import React, { useState, useContext } from "react";
import { BudgetContext } from "../../context/budget-context";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(BudgetContext);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if(user){
      navigate("/transactions")
    }else if(!email || !password){
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    

    console.log(email, password);

    try {

      const result = await signInWithEmailAndPassword(auth, email, password); //fb

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      
      console.log(result, "userInfo on sign up");
      setLoading(false);
      navigate("/transactions");
    } catch (error) {
      console.log(error.message);  
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          focusBorderColor="pink.400"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          errorBorderColor="red.300"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            focusBorderColor="pink.400"
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
            errorBorderColor="red.300"
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="purple"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        fontWeight="bold"
        colorScheme="pink"
        width="100%"
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
        isLoading={loading}
        //disabled={user}
      >
        {user ? "Already Loged In !! Click here to Go Back !!" :'Login'}
      </Button>
      <Button fontWeight="bold"
        variant="solid"
        colorScheme="purple"
        width="100%"
        disabled={user}
        onClick={() => {
        setEmail("guest@test.com");
        setPassword("guesttest");
      }}
    >
      {user ? "Already Loged In !!" :'Guest User Login'}

    </Button>
    </VStack>
  );
};

export default Login;
