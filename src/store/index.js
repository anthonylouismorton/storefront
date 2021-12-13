import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './product.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';
import thunk from './middleware/thunk.js'

let reducers = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer
});

// create our "store" - stands for storage not storefront :P
let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
