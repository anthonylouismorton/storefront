import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import {fetchCart} from '../../store/cart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ViewCart({getCart, productSelect, cart, removeFromCart}) {
    useEffect(()=> {
        getCart();
      }, [])
    return (
        <>
            {cart.map((product) => {
                return (
                    <>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component='img'
                                height='140'
                                image={product.imageUrl}
                                alt='green iguana'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {product.name}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {product.description}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    Price: ${product.price}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {/* In Cart: {product.cartQuantity} */}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <AddShoppingCartIcon
                                    size='small'
                                    // onClick={() => {
                                    //     removeFromCart(product);
                                    // }}
                                >
                                    Add
                                </AddShoppingCartIcon>
                                <RemoveShoppingCartIcon
                                    size='small'
                                    onClick={() => {
                                        removeFromCart(product);
                                    }}
                                >
                                    Remove
                                </RemoveShoppingCartIcon>
                                <Button size='small'></Button>
                            </CardActions>
                        </Card>
                    </>
                );
            })}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        productSelect: state.products.products,
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
    getCart: () => dispatch(fetchCart())
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);