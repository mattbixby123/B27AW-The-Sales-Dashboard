import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import PrimaryDash from './components/primary-dash';
import Heading from './components/heading';
import TransactionBar from './components/transaction-bar';
import { Grid } from '@mui/material';
import { mockTransactions } from '/mockData'; // Import mockTransactions data, assuming the path is correct

function App() {
  return (
    <Grid container> {/* MAIN CONTAINER FOR APP*/}
      <Grid item xs={12} md={3}> {/* Sidebar Component Grid */}
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={9}> {/* Header Grid */}
        <Heading />
      </Grid>

      <Grid item xs={12} md={9}> {/* PrimaryDash Grid */}
        <PrimaryDash transactions={mockTransactions} />
      </Grid>

      <Grid item xs={12}> {/* TransactionBar Component Grid */}
        <TransactionBar transactions={mockTransactions} />
      </Grid>
    </Grid>
  );
}

export default App;
