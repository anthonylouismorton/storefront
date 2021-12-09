import { createStore, combineReducers } from 'redux';
import productReducer from './product.js';
import categoryReducer from './categories.js'

let reducers = combineReducers({
  category: categoryReducer,
  products: productReducer,
});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
}

export default store;
