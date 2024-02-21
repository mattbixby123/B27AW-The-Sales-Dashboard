import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import PrimaryDash from './components/primary-dash';
import Heading from './components/heading';
import TransactionBar from './components/transaction-bar';
import { Grid } from '@mui/material';
import { mockTransactions } from '/mockData'; // Import mockTransactions data


function App() {

  return (
    <Grid container>
      {/* Sidebar Component */}
      <Grid item xs={12} md={3}>
        <Sidebar />
      </Grid>
      {/* Main Content Area */}
      <Grid item xs={12} md={9}>
        <Grid container direction="column">
          {/* Heading Component */}
          <Grid item>
            <Heading />
          </Grid>
          {/* PrimaryDash Component */}
          <Grid item>
            <PrimaryDash transactions={mockTransactions} />
          </Grid>
        </Grid>
      </Grid>
      {/* TransactionBar Component */}
      <Grid item xs={12}>
        <TransactionBar transactions={mockTransactions} />
      </Grid>
    </Grid>
  );
}

export default App;
