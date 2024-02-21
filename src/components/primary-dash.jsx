import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { mockTransactions } from '/mockData'; // Import mockTransactions data
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SellIcon from '@mui/icons-material/Sell';


const PrimaryDash = () => {
        // these functions process the data to extract relevant information from mockData.js 
        const totalRevenue = mockTransactions.reduce((acc, curr) => acc + parseFloat(curr.cost), 0).toFixed(2);
        const newClients = new Set(mockTransactions.map(transaction => transaction.user)).size;
  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Title */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Sales & Revenue Tracker: Food Items
        </Typography>
      </Grid>
    
      {/* Section 1 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          <PersonAddAltIcon />
          <Typography variant="h6" gutterBottom>
            New Clients
          </Typography>
          <Typography variant="body1">{newClients}</Typography>
        </Paper>
      </Grid>

      {/* Section 2 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          <SellIcon></SellIcon>
          <Typography variant="h6" gutterBottom>
            Revenue Generated
          </Typography>
          <Typography variant="body1">{`${totalRevenue} USD`}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PrimaryDash;
