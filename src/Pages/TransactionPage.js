import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import Details from "../components/Details/Details";
import Main from "../components/Main/Main";
import { BudgetContext } from "../context/budget-context";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const TransactionPage = () => {
  const { user } = useContext(BudgetContext);

  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      <HeaderBar />
      {!user ? (
        <Box
          d="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          fontFamily="Work sans bold"
          //width="50%"
          marginTop="20px"
          gap="23px"
        >
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="yellow"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
            Start Saving
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="purple"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
           And Managing
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="yellow"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
            Your Budget
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="purple"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
            By
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="yellow"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
            Clicking On
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="purple"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
          Any of US
          </Button>
          <Button
            width="30%"
            //height="10vh"
            fontWeight="bold"
            colorScheme="yellow"
            fontSize="3xl"
            //style={{ marginTop: "15px" }}
            onClick={() => navigate("/")}
            p={8}
          >
            Please Login First !!
          </Button>
        
        </Box>
      ) : (
        <Box
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p={6}
          mt={3}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "9", md: "3" }}
          //h="75vh"
          //bg="pink.400"
        >
          <Box
            d={{ base: "none", md: "flex" }}
            bg="green.50"
            alignItems="center"
            justifyContent="center"
            w={{ base: "85%", md: "31%" }}
            border="1.5px solid black"
            borderBottom="0.8em solid #00ff00;"
            p={2}
            borderRadius="md"

            //flexGrow={1.5}
          >
            <Details title="Income" />
          </Box>

          <Box
            d="flex"
            bg="purple.900"
            //bg="#0F3057"
            w={{ base: "85%", md: "33%" }}
            alignItems="center"
            justifyContent="center"
            p={2}
            borderRadius="md"
            border="1.5px solid black"
            alignSelf={{base:"center" , md:"flex-start"}}
            borderBottom="0.8em solid #D53F8C"
          >
            <Main />
          </Box>

          <Box
            d={{ base: "flex", md: "none" }}
            bg="green.50"
            border="1.5px solid black"
            borderBottom="0.8em solid #00ff00;"
            p={2}
            w={{ base: "85%", md: "0%" }}
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Details title="Income" />
          </Box>

          <Box
            p={2}
            d="flex"
            bg="red.50"
            w={{ base: "85%", md: "31%" }}
            border="1.5px solid black"
            borderBottom="0.8em solid #F54748"
            // flexGrow={1.5}
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Details title="Expense" />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TransactionPage;
