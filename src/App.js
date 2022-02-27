import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import TransactionPage from "./Pages/TransactionPage";
import UpdateTransaction from "./Pages/UpdateTransaction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/:tId" element={<UpdateTransaction />} />
      </Routes>
    </div>
  );
}

export default App;
