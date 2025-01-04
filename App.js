import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseSummary from "./components/ExpenseSummary";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" margin="20px 0">
        <Typography variant="h4" gutterBottom>
          Advanced Expense Tracker
        </Typography>
      </Box>
      <AddExpense addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} />
    </Container>
  );
};

export default App;
