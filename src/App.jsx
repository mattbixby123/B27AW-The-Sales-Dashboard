import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import  PrimaryDash  from './components/primary-dash';
import { Grid } from '@mui/material';

function App() {

  return (
    <Grid container>
      <Sidebar />
      <PrimaryDash />
    </Grid>  
  )
}

export default App
