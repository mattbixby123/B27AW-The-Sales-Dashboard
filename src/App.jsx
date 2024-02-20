import React from 'react';
import './App.css';
import Heading from './components/heading';
import Sidebar from './components/sidebar';
import TransactionBar from './components/transaction-bar';
import  PrimaryDash  from './components/primary-dash';
import { Grid } from '@mui/material';

function App() {

  return (
    <Grid container>
      <Heading />
      <Sidebar />
      <transactionBar />
      <primaryDash />
    </Grid>  
  )
}

export default App
