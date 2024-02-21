import { Avatar, Grid, } from "@mui/material";
import { deepOrange } from '@mui/material/colors';

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