import React from 'react';
import { Grid, Typography, Card, Paper } from '@mui/material';

const PrimaryDash = () => {
  return (
    <Grid container spacing={3}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Sales & Revenue Tracker: Food Items
        </Typography>
      </Grid>
      {/* Chart Section 1 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          {/* Placeholder content for Chart Section 1 */}
          <Typography variant="h6" gutterBottom>
            Chart Section 1
          </Typography>
          {/* Replace with your chart component */}
          <Typography variant="body1">
            [Chart Section 1 content goes here]
          </Typography>
        </Paper>
      </Grid>
      {/* Chart Section 2 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          {/* Placeholder content for Chart Section 2 */}
          <Typography variant="h6" gutterBottom>
            Chart Section 2
          </Typography>
          {/* Replace with your chart component */}
          <Typography variant="body1">
            [Chart Section 2 content goes here]
          </Typography>
        </Paper>
      </Grid>
      {/* Chart Section 3 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          {/* Placeholder content for Chart Section 3 */}
          <Typography variant="h6" gutterBottom>
            Chart Section 3
          </Typography>
          {/* Replace with your chart component */}
          <Typography variant="body1">
            [Chart Section 3 content goes here]
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PrimaryDash;
