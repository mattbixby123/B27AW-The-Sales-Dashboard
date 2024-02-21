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
        <Box sx={{ marginRight: 2 }}>
          <Button color="inherit">Action 1</Button>
          <Button color="inherit">Action 2</Button>
          {/* Add more buttons or components as needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TransactionBar;
