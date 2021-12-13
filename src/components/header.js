import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Categories from './menu/categories.js'
import SimpleCart from './cart/simpleCart.js'

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Categories />
          <Typography onClick={()=> {
            props.hideCartHandler(); 
          }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store Front
          </Typography>
          <SimpleCart showCartHandler={props.showCartHandler}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}