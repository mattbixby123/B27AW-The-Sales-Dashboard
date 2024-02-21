import { Grid, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard as DashboardIcon, LiveHelp as LiveHelpIcon } from '@mui/icons-material';

function Sidebar() {
  return ( 
    <Grid item sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '200px',
      height: '100%',
      backgroundColor: '#ee9977',
      transition: 'width 0.3s ease-in-out',
      overflowY: 'auto',
      zIndex: 1000,
      paddingTop: '100px',
      '&:hover': {
        width: '250px',
      },
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: 'black'
      },
    }}>
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
