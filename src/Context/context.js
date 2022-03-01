import { BudgetContext, initialState } from "./budget-context";
import contextReducer from "./contextReducer";
import React, { useReducer, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; //from fb
import { auth } from "../firebase";
//import { useDisclosure } from "@chakra-ui/hooks";

const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const [user, setUser] = useState(null);

  //const { isOpen, /* onOpen, onClose */ } = useDisclosure();

  const [editTransaction, setEditTransaction] = useState(null);

  const findTransaction =(id)=>{
    const transactionToBeEdited = transactions.find((t)=>t.id===id);
    console.log(transactionToBeEdited);
    setEditTransaction(transactionToBeEdited);
  }
  //console.log(editTransaction);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const editSingleTransaction = (transaction) => {
    dispatch({ type: "EDIT_TRANSFER", payload: transaction})
  }
  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );
  //console.log(balance, "balance");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //CB arg inbuilt from fb
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  //console.log('user check uid, name, email', user);

  return (
    <BudgetContext.Provider
      value={{
        transactions,
        balance,
        deleteTransaction,
        addTransaction,
        user,
        setEditTransaction,
        editTransaction,
        findTransaction,
        editSingleTransaction
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default Provider;
