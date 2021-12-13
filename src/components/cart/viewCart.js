import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';

function ViewCart(props) {
    return (
        <>
            {props.productSelect.map((product) => {
                if (props.cart.includes(product.productName)) {
                    return (
                        <>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component='img'
                                    height='140'
                                    image={product.image}
                                    alt='green iguana'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {product.productName}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        {product.description}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        Price: ${product.cost}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        In Cart: {product.cartQuantity}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size='small'
                                        onClick={() => {
                                            props.removeFromCart(product);
                                        }}
                                    >
                                        Remove
                                    </Button>
                                    <Button size='small'></Button>
                                </CardActions>
                            </Card>
                        </>
                    );
                }
            })}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        productSelect: state.products.products,
        categoryFilter: state.category.onLoad,
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeProduct: (name) => dispatch({ type: 'CATEGORY_CHOICE', payload: name }),
    removeFromCart: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);