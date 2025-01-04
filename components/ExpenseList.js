import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <List>
      {expenses.map((expense, index) => (
        <ListItem key={index} secondaryAction={
          <IconButton edge="end" onClick={() => removeExpense(index)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText
            primary={`${expense.title}: $${expense.amount}`}
            secondary={`Date: ${expense.date} | Category: ${expense.category}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
