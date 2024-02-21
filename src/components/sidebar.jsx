import { Grid } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DashboardIcon, FAQIcon } from '@mui/icons-material/Dashboard';

function Sidebar() {
  return ( 
    <Grid item>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FAQIcon />
        </ListItemIcon>
        <ListItemText primary="FAQ" />
      </ListItemButton>
    </Grid>
   );
}

export default Sidebar;