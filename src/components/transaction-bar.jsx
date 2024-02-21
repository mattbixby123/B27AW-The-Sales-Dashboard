import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';

const TransactionBar = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}> 
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6" component="div">
            Transaction Bar
          </Typography>
        </Box>
        <Box sx={{ marginRight: 2, overflowY: 'auto', maxHeight: '100px' }}>
          {/* Placeholder for recent transactions */}
          <Typography variant="body1" component="div">
            {/* Replace with actual recent transactions */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>Recent Transaction {index + 1}</div>
            ))}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TransactionBar;
