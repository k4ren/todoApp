import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";

export default function Navbar({navArrLinks}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo Simple App
          </Typography>
          {
            navArrLinks.map(item => (
              <IconButton key={item.title}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href={item.path}
                to={NavLink}
              >
                {item.icon}
              </IconButton>
            ))
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}