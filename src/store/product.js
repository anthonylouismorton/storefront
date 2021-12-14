import axios from 'axios';

let initialState= {
  products: [],
  filtered: []
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch(type) {
    case 'SELECTED_CATEGORY':
        if (payload !== 'all') {
          let filteredproduct = state.products.filter((product) => { 
            if(product.categoryId === payload){
            return product
            }
          })
          return{...state, filtered: filteredproduct}
        } 
          return{...state, filtered: state.products}
    case 'ADD_TO_CART':
        let decrement = state.products.map((product) => {
          if (product.name === payload.name) {
            if (product.inventoryCount > 0) {
                // product.cartQuantity += 1;
                //   product.inStock--;
                product.inventoryCount--
              } 
              else {
                  alert('Item out of stock');
              }
          }
          return product;
        });
        return { ...state, products: decrement };
    case 'FETCH_PRODUCTS':
      return {products: payload, filtered: payload};
    default:
      return state;
  }
}

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/products`);
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data.results
  })
}

export const addToCart = (product) => async (dispatch) => {
  console.log('this is being called')
  const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/cart/${product.id}`, product);
  dispatch({
    type: 'ADD_TO_CART',
    payload: response.data.results
  })
}

export default productReducer;
