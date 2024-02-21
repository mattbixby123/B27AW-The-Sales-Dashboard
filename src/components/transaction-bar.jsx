import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TransactionBar = ({ transactions }) => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}> 
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6" component="div">
            Transaction Bar
          </Typography>
        </Box>
        <Box sx={{ marginRight: 2, overflowY: 'auto', maxHeight: '100px' }}>
          {/* Display recent transactions */}
          {transactions.map((transaction, index) => (
            <Typography key={index} variant="body1" component="div">
              {`${transaction.user} made a transaction of $${transaction.cost} on ${transaction.date}`}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TransactionBar;
