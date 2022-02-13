import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSpeechContext } from "@speechly/react-client";
import formatDate from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { BudgetContext } from "../../../context/budget-context";
import { Box } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/input";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { CalendarIcon } from "@chakra-ui/icons";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useToast } from "@chakra-ui/toast";


const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [datePicker, setDatePicker] = useState(new Date());

  //console.log("date", formatDate(datePicker));

  //const { segment } = useSpeechContext();

  const { addTransaction } = useContext(BudgetContext);
  const toast = useToast();

  console.log(formData, "formData state");

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const typeHandler = (e) => {
    //console.log("Transaction Type: ", e.target.value);
    setFormData({ ...formData, type: e.target.value });
  };

  const categoryHandler = (e) => {
    //console.log("Category Type: ", e.target.value);
    setFormData({ ...formData, category: e.target.value });
  };

  const amountHandler = (e) => {
    console.log("Amount: ", e.target.value);
    setFormData({ ...formData, amount: e.target.value });
  };

  const createTransaction = () => {
    setFormData({ ...formData, date: formatDate(datePicker) });
    console.log("Created Transaction", formData);

    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-") || (Number(formData.amount) < 1)) {
      toast({
        title: "Pleae enter Required Details",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return
    }
      

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: "Income" });
    } else if (
      expenseCategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Expense" });
    }

    toast({
      title: "Transaction Successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });
    setFormData(initialState);
  };

  return (
    <Box
      d="flex"
      //bg="blue.300"
      justifyContent="space-between"
      p={1}
      width="100%"
      alignItems="center"
      flexWrap="wrap"
      rowGap={5}
      color="gray.200"
    >
      <FormControl width="47%">
        <FormLabel htmlFor="type">Type</FormLabel>
        <Select
          id="type"
          value={formData.type}
          onChange={typeHandler}
          //bg="purple"
          cursor="pointer"
          border="2px solid"
          focusBorderColor="pink.500"
        >
          <option
            value="Income"
            cursor="pointer"
            style={{ backgroundColor: "orange" }}
            _hover={{ backgroundColor: "yellow" }}
          >
            Income
          </option>
          <option value="Expense" style={{ backgroundColor: "orange" }}>
            Expense
          </option>
        </Select>
      </FormControl>

      <FormControl width="47%">
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select
          id="category"
          value={formData.category}
          onChange={categoryHandler}
          cursor="pointer"
          border="2px solid"
          focusBorderColor="pink.500"
        >
          {selectedCategories.map((c) => (
            <option
              style={{ backgroundColor: "orange", color: "red" }}
              key={c.type}
              value={c.type}
            >
              {c.type}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl width="47%">
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <NumberInput max={50000000000} min={1}>
          <InputGroup focusBorderColor="pink.500">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="₹"
            />
            <NumberInputField
              border="2px solid"
              id="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              paddingLeft="2em"
              onChange={amountHandler}
            />
          </InputGroup>
        </NumberInput>
      </FormControl>

      <FormControl width="47%">
        <FormLabel htmlFor="date">Date</FormLabel>
        <InputGroup focusBorderColor="pink.500" color="gray.500">
          <SingleDatepicker
            style={{ border: "2px solid", color: "gray" }}
            name="date"
            date={datePicker}
            onDateChange={setDatePicker}
          />
          <InputRightElement
            pointerEvents="none"
            //color="black"
            fontSize="1em"
            children={<CalendarIcon color="gray.300" />}
          />
        </InputGroup>
      </FormControl>

      <Button
        fontWeight="bold"
        fontSize="lg"
        colorScheme="pink"
        width="100%"
        style={{ marginTop: "0.25em", padding: ".8em" }}
        onClick={createTransaction}
      >
        Create Transaction
      </Button>
    </Box>
  );
};

export default Form;
