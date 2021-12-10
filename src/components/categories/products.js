import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import { Box } from '@mui/material';

const Products = (props) => {
  console.log(props)
  return (
    <Box
    maxWidth='xxl' 
    sx={{ display: 'flex', justifyContent: 'flexStart', flexDirection: 'row', margin: 5}}>

      {props.product.map((product, index) => {
        return <ProductCard key={index} product={product} props={props} />;
      })}
    </Box>
  );
};

const mapStateToProps = (state) => ({product: state.products.products, cart: state.cart.cart}) 

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (name) =>
    dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
  addToCart: (product) =>
    dispatch({
    type: 'ADD_TO_CART',
    payload: product
    }),
  removeFromCart: (product) =>
    dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);