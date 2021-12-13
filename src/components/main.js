import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Products from './categories/products.js';
import { connect } from 'react-redux';
import ViewCart from './cart/viewCart.js';
import Header from './header';
import Footer from './footer';

function Main(props) {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = (e) => setShowCart(true);

    const hideCartHandler = () => setShowCart(false);
    return (
        <>
            <Header
                showCartHandler={showCartHandler}
                hideCartHandler={hideCartHandler}
            />

            {props.categorySelect.onLoad ? (
                <h1>{props.categorySelect.onLoad} Products</h1>
            ) : (
                <h1>Welcome to StoreFront</h1>
            )}
            {!showCart ? (
                <Box
                    sx={
                        ({ display: 'flex' },
                        { flexDirection: 'row' },
                        { margin: 5 },
                        { justifyContent: 'center' },
                        { alignItems: 'center' })
                    }
                >
                    <Products />
                </Box>
            ) : (
                <ViewCart />
            )}

            <Footer />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        categorySelect: state.category,
    };
};

///TODO
//// NEed to fixx the rendering of the Catefgory

export default connect(mapStateToProps)(Main);
// import React from 'react';
// import Products from '../src/components/categories/products.js'
// import {Box, Divider} from '@mui/material';

// function Main(props) {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <Box>
//       <Divider />
//       <Products />
//     </Box>
//   );
// }


// export default Main;