import { Grid } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Heading() {
  return ( 
    <Grid item sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#e97042',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      zIndex: 1001,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid item>
        <RestaurantIcon sx={{ marginRight: '10px', color: '#000000' }} />
      </Grid>
      <Grid item>
        <h2>NomNom Bistro</h2>
      </Grid>
    </Grid>
   );
}

export default Heading;
