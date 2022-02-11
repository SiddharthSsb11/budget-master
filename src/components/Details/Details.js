import React from "react";
import useTransactions from "../../useTransactions";
import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <Box
      d="flex"
      flexDir="column"
      alignItems="center"
      gap="5px"
      justifyContent="space-between"
      w={{ base: "85%", md: "95%" }} 
      //bg="yellow.200"
      pt={1}
    >
      <Heading
        textAlign="center"
        paddingBottom={1}
        as="h4"
        size="lg"
        fontFamily="Work sans bold"
        color="gray.700"
        width="65%"
        borderBottom="2px solid gray"
      >
        {title}
      </Heading>
      <Text fontWeight="bold" fontSize="lg" color="gray.600">
        ₹{total}
      </Text>
      <Doughnut style={{height: "10px" , width: "10px"}}  data={chartData}
      />
    </Box>
  );
};

export default Details;
