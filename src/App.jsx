import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import  PrimaryDash  from './components/primary-dash';
import Heading from './components/heading';
import TransactionBar from './components/transaction-bar';
import { Grid } from '@mui/material';

function App() {

  return (
    <Grid container>
      <Sidebar /> {/* Render Sidebar component*/}
      <Grid item xs={9}>
        <Grid container direction="column">
          <Heading /> {/* Render Heading component */}
          <PrimaryDash /> {/* Render PrimaryDash component*/}
        </Grid>
      </Grid>
      <TransactionBar /> {/* Render TransactionBar component */}
    </Grid>
  );
}

export default App
