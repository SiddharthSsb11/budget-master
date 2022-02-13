import React,{useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import {BudgetContext} from "../context/budget-context";


const HomePage = () => {
  const { user } = useContext(BudgetContext);
  const navigate = useNavigate();

/*   useEffect(() => {
    if (user) navigate("/chats");
  }, [navigate, user]) */;

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        margin = "2rem 0 1rem 0"
        p={3}
        borderRadius="lg"
        borderColor="black" borderWidth="1px"
        w="100%"
        bg="#0F3057"
      >
        <Text
          color="gray.100"
          fontSize="4xl"
          fontFamily="Work sans"
          fontWeight="bold"
        >
          Budget Master
        </Text>
      </Box>
      <Box bg="purple.50" w="100%" p={4} borderRadius="lg" borderColor="black" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="pink">
          <TabList mb="1em">
            <Tab fontWeight="bold" >Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
