import { BudgetContext, initialState} from "./budget-context";
import contextReducer from './contextReducer';
import React, { useReducer } from 'react';


const Provider = ({ children }) => {
    
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
  console.log(balance, 'balance');

  return (
    <BudgetContext.Provider value={{ transactions, balance, deleteTransaction, addTransaction }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default Provider;