import React from 'react';
import Categories from './categories.js'
import Product from './products.js'
import {Box} from '@mui/material';

function Main(){
  return(
  <Box mt={2} sx={{
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7]}
  }}>
  <Categories />

  </Box>
  )
}

export default Main;