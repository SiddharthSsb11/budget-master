import React from "react";

export const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 500,
    category: "Salary",
    type: "Income",
    date: "2022-01-26",
    id: "44c68123-5b86-4cc8-b915-bb9e16cebe6a",
  },
  {
    amount: 125,
    category: "Gifts",
    type: "Income",
    date: "2022-01-26",
    id: "33b295b8-a8cb-49f0-8f0d-bb268686de1a",
  },
  {
    amount: 150,
    category: "Salary",
    type: "Income",
    date: "2022-01-23",
    id: "270304a8-b11d-4e16-9341-33df641ede64",
  },
  {
    amount: 250,
    category: "Fuel",
    type: "Expense",
    date: "2022-01-30",
    id: "c5647dde-d857-463d-8b4e-1c866cc5f83e",
  },
  {
    amount: 120,
    category: "Travel",
    type: "Expense",
    date: "2022-01-30",
    id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
  },
 
  {
    amount: 420,
    category: "Rent",
    type: "Expense",
    date: "2022-01-31",
    id: "365a4ebd-9892-4471-ad55-36077e4121a9",
  },

  {
    amount: 300,
    category: "Savings",
    type: "Income",
    date: "2022-01-29",
    id: "ef090181-21d1-4568-85c4-5646232085b2",
  },
  {
    amount: 105,
    category: "Savings",
    type: "Income",
    date: "2022-01-28",
    id: "037a35a3-40ec-4212-abe0-cc485a98aeee",
  },
];

export const BudgetContext = React.createContext(initialState);
