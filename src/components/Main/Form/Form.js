import React, { useState, useContext } from "react";
import { Box } from "@chakra-ui/layout";
import { v4 as uuidv4 } from "uuid";
//import { useSpeechContext } from "@speechly/react-client";
import formatDate from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { BudgetContext } from "../../../context/budget-context";
import {
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  Spinner,
  Select,
} from "@chakra-ui/react";
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { CalendarIcon } from "@chakra-ui/icons";
//import { SingleDatepicker } from "chakra-dayzed-datepicker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useToast } from "@chakra-ui/toast";

/* const initialState = {
  amount: 0,
  category: "",
  type: "Income",
  date: formatDate(new Date()),
}; */

const Form = () => {
  ///const [formData, setFormData] = useState(initialState);
  const [datePicker, setDatePicker] = useState(new Date());
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  //console.log("date", formatDate(datePicker));

  //const { segment } = useSpeechContext();

  const { addTransaction } = useContext(BudgetContext);
  const toast = useToast();

  //console.log(formData, "formData state");

  const selectedCategories =
    transactionType === "Income" ? incomeCategories : expenseCategories;

  const typeHandler = (e) => {
    //console.log("Transaction Type: ", e.target.value);
    //setFormData({ ...formData, type: e.target.value });
    setTransactionType(e.target.value);
  };

  const categoryHandler = (e) => {
    //console.log("Category Type: ", e.target.value);
    //setFormData({ ...formData, category: e.target.value });
    setCategory(e.target.value);
  };

  const amountHandler = (e) => {
    //console.log("Amount: ", e.target.value);
    //setFormData({ ...formData, amount: e.target.value });
    setAmount(e.target.value);
  };

  const createTransaction = () => {
    //e.preventDefault();
    //setFormData({ ...formData, date: formatDate(datePicker) });
    //console.log("Created Transaction", formData);
    //console.log(amount, category, transactionType, datePicker);
    if (
      Number.isNaN(Number(amount)) ||
      !datePicker.includes(" ") ||
      Number(amount) < 1 ||
      category.length === 0
    ) {
      toast({
        title: "Something Went Wrong !! Please enter Transaction Details Again",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (incomeCategories.map((iC) => iC.type).includes(category)) {
      setTransactionType("Income");
    } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
      setTransactionType("Expense");
    }

    setLoading(true);

    toast({
      title: "Transaction Successful",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });

    addTransaction({
      amount: Number(amount),
      category: category,
      type: transactionType,
      date: datePicker,
      id: uuidv4(),
    });

    setDatePicker("");
    setTransactionType("Income");
    setAmount(0);
    setCategory(new Date());

    setLoading(false);
    //setFormData(initialState);
  };

  //Thu Mar 10 2022 12:00:00 GMT+0530 (India Standard Time)

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
      {loading ? (
        <Spinner
          size="2xl"
          w={12}
          h={12}
          alignSelf="center"
          margin="auto"
          color="pink.600"
        />
      ) : (
        <>
          <FormControl width="47%" isRequired>
            <FormLabel htmlFor="type">Type</FormLabel>
            <Select
              id="type"
              value={transactionType}
              onChange={typeHandler}
              //bg="purple"
              cursor="pointer"
              border="2px solid"
              focusBorderColor="pink.500"
            >
              <option
                value="Income"
                cursor="pointer"
                style={{ background: "purple", color: "white" }}
              >
                Income
              </option>
              <option
                value="Expense"
                style={{ background: "purple", color: "white" }}
              >
                Expense
              </option>
            </Select>
          </FormControl>

          <FormControl width="47%" isRequired>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select
              id="category"
              //placeholder="Category"
              value={category}
              onChange={categoryHandler}
              cursor="pointer"
              border="2px solid"
              focusBorderColor="pink.500"
            >
              {selectedCategories.map((c) => (
                <option
                  bg="purple.900"
                  style={{ background: "purple", color: "white" }}
                  key={c.type}
                  value={c.type}
                >
                  {c.type}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl width="47%" isRequired>
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
                  value={amount}
                  paddingLeft="2em"
                  onChange={amountHandler}
                />
              </InputGroup>
            </NumberInput>
          </FormControl>

          <FormControl width="47%" isRequired>
            <FormLabel htmlFor="date">Date</FormLabel>
            <InputGroup focusBorderColor="pink.500" /* color="gray.500" */>
              <DayPickerInput
                style={{
                  border: "2px solid",
                  color: "gray",
                  height: "100%",
                  width: "100%",
                  padding: "0.4em",
                  borderRadius: "7px",
                }}
                onDayChange={
                  (day) => setDatePicker(formatDate(day)) /* console.log(day) */
                }
              />
              <InputRightElement
                pointerEvents="none"
                //color="black"
                fontSize="1em"
                mr={2.5}
                children={<CalendarIcon color="gray.500" />}
              />
            </InputGroup>
          </FormControl>
        </>
      )}

      <Button
        fontWeight="bold"
        fontSize="lg"
        colorScheme="pink"
        width="100%"
        marginTop="3px"
        onClick={createTransaction}
      >
        Create Transaction
      </Button>
    </Box>
  );
};

export default Form;
