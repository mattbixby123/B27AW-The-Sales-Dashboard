import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import PrimaryDash from './components/primary-dash';
import Heading from './components/heading';
import TransactionBar from './components/transaction-bar';
import { Grid } from '@mui/material';

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
            <PrimaryDash />
          </Grid>
        </Grid>
      </Grid>
      {/* TransactionBar Component */}
      <Grid item xs={12}>
        <TransactionBar />
      </Grid>
    </Grid>
  );
}

export default App;
