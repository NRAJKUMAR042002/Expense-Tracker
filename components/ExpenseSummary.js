import React from "react";
import { Typography } from "@mui/material";

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const monthlyExpense = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString("default", { month: "long" });
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <Typography variant="h6">Total Expenses: ${total.toFixed(2)}</Typography>
      <Typography variant="h6">Monthly Expenses:</Typography>
      {Object.entries(monthlyExpense).map(([month, amount]) => (
        <Typography key={month}>{`${month}: $${amount.toFixed(2)}`}</Typography>
      ))}
    </div>
  );
};

export default ExpenseSummary;
