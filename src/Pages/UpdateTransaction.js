import React, { useContext, useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useNavigate, useParams } from "react-router-dom";
import { BudgetContext } from "../context/budget-context";
import formatDate from "../utils/formatDate";
import { incomeCategories, expenseCategories } from "../constants/categories";
import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/input";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { CalendarIcon } from "@chakra-ui/icons";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

const initialState = {
  amount: 0,
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const UpdateTransaction = () => {
  const [trData, setTrData] = useState({});//useState(null)
  const [formData, setFormData] = useState(initialState);
  const [datePicker, setDatePicker] = useState(new Date());
  //const [amount, setAmount] = useState(Number);
  //console.log(formData)
  const toast = useToast();

  const { transactions, deleteTransaction, addTransaction } =
    useContext(BudgetContext);
  const { tId } = useParams();
  const navigate = useNavigate();
  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  /* useEffect(() => {
    const tr = transactions.find(transaction=> transaction.id===tId);
    console.log(tr);
    setTrData(tr);
  },[tId])  */

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
    //console.log("Created Transaction", formData);

    if (
      Number.isNaN(Number(formData.amount)) ||
      Number(formData.amount) < 1 ||
      formData.category.length === 0
    ) {
      toast({
        title: "Oops!! Please check & enter new Transaction Details Again",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: "Income" });
    } else if (
      expenseCategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Expense" });
    }

    toast({
      title: "Transaction Updated",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "bottom",
    });

    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });

    deleteTransaction(tId);
    navigate("/transactions");
    setDatePicker(new Date());

    setFormData(initialState);
  };

  return (
    <Box
      d="flex"
      flexDir="column"
      bg="blue.900"
      width="50%"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      gap="0.5em"
      //border="2px solid #A0AEC0"
      p={4}
    >
      <Box
        d="flex"
        //bg="blue.300"
        justifyContent="space-between"
        p={2}
        width="80%"
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

        <FormControl width="47%">
          <FormLabel htmlFor="category">Category</FormLabel>
          <Select
            id="category"
            //placeholder="Category"
            value={formData.category}
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
          marginTop="3px"
          onClick={createTransaction}
        >
          Update Transaction
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateTransaction;
