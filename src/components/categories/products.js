import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import { Box } from '@mui/material';
import { fetchProducts } from '../../store/product';

const Products = (props) => {
  useEffect(()=> {
    props.getProducts();
  }, [])
  return (
    <Box
    maxWidth='xxl' 
    sx={{ display: 'flex', justifyContent: 'flexStart', flexDirection: 'row', margin: 5}}>

      {props.product.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </Box>
  );
};


const mapStateToProps = (state) => ({product: state.products.products, cart: state.cart.cart}) 

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (name) =>
    dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
  getProducts: () => dispatch(fetchProducts())

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);