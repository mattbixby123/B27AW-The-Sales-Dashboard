import { Grid } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

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
          <LiveHelpIcon />
        </ListItemIcon>
        <ListItemText primary="FAQ" />
      </ListItemButton>
    </Grid>
   );
}

export default Sidebar;