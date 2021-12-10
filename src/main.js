import React from 'react';
import Products from '../src/components/categories/products.js'
import {Box, Divider} from '@mui/material';

function Main() {
  return (
    <Box>
      <Divider />
      <Products />
    </Box>
  );
}


export default Main;