import React, { useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import Details from "../components/Details/Details";
import Main from "../components/Main/Main";

const TransactionPage = () => {
  //const { user } = useContext(ChatContext);

  /*  const navigate = useNavigate();
    const isRefreshingRef = useIsRefreshingRef() */

  //navigate('/chats');

  return (
    <div style={{ width: "100%" }}>
      <HeaderBar />
      <Box 
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        p={6}
        mt={3}
        flexDir={{ base: "column", md: "row" }}
        gap={{base:"9", md:"3"}}
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
    </div>
  );
};

export default TransactionPage;
