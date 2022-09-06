import React from 'react'
import './Nav.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Nav() {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
        <Toolbar>
          <img src="" alt="" />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Button color="inherit">Modelos</Button>
          <Button color="inherit">Ficha de Modelos</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Nav