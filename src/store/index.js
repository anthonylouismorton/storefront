import { createStore, combineReducers } from 'redux';
import productReducer from './product.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';

let reducers = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer
});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
}

export default store;
