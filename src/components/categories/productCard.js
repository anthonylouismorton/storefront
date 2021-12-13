import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { connect } from 'react-redux';

function ProductCard(props) {
  console.log(props)
  return (
    
    <Card 
      className='productCard'
      sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.product.imageUrl}
        alt={props.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id='name'>
         {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='description'>
          Description: {props.product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='inStock'>
          In Stock: {props.product.inventoryCount}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='inStock'>
          Price: ${props.product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          props.addToCart(props.product)
          }}>
            Add to Cart</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);