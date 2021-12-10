import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { connect } from 'react-redux';

function ProductCard({product}, props) {
  return (
    
    <Card 
      className='productCard'
      sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id='name'>
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='description'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.addToCart(product)}>Add to Cart</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
const mapStateToProps = (state) => ({cart: state.cart.cart}) 

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) =>
    dispatch({
    type: 'ADD_TO_CART',
    payload: product
    }),
});
export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);