import React from 'react';
import { Grid, Typography, Card, Paper } from '@mui/material';

const PrimaryDash = () => {
  return (
    <Grid container spacing={3}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard Title
        </Typography>
      </Grid>
      {/* Section 1 */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          {/* Placeholder content for Section 1 */}
          <Typography variant="h6" gutterBottom>
            Section 1
          </Typography>
          <Typography variant="body1">
            This is where your first section content goes.
          </Typography>
        </Paper>
      </Grid>
      {/* Section 2 */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
          {/* Placeholder content for Section 2 */}
          <Typography variant="h6" gutterBottom>
            Section 2
          </Typography>
          <Typography variant="body1">
            This is where your second section content goes.
          </Typography>
        </Paper>
      </Grid>
      {/* Card */}
      <Grid item xs={12}>
        <Card sx={{ width: '100%' }}>
          {/* Placeholder content for the card */}
          <Typography variant="h6" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body1">
            This is a card content. You can add more cards or other components here.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PrimaryDash;
