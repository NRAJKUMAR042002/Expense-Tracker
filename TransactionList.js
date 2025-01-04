import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

const TransactionList = ({ transactions }) => (
  <List>
    {transactions.map((t) => (
      <React.Fragment key={t.id}>
        <ListItem>
          <ListItemText
            primary={`${t.type.toUpperCase()} - ${t.category}`}
            secondary={`Amount: ${t.amount} ${t.currency} | Date: ${t.date}`}
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
    {transactions.length === 0 && (
      <Typography align="center" variant="body1">
        No transactions yet.
      </Typography>
    )}
  </List>
);

export default TransactionList;
