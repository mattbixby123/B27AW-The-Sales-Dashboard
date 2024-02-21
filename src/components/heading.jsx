import { Avatar, Grid, TextField, Button } from "@mui/material";
import { DashboardIcon, FAQIcon } from '@mui/icons-material/Dashboard';

function Heading() {
  return ( 
    <Grid item align="center">
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        NNB
      </Avatar>
      <h2>NomNom Bistro</h2>
    </Grid>
   );
}

export default Heading