import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Movies','Home'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            
            <MenuItem>Home</MenuItem>
            <MenuItem onClick={()=>window.location.reload()}>Movies</MenuItem>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
