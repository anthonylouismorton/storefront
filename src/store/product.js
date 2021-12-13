import axios from 'axios';

let initialState= {
  products: [
    // {productName: 'banana', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XGxPCEjJtOmxnAqJ3xu_2VFYvuoSPDIJXg&usqp=CAU', description: 'this is a carrot', category: 'fruit', cost: 1, inStock: 10, cartQuantity: 0},
    // {productName: 'apple', image: 'https://i5.walmartimages.com/asr/32451a10-0563-426a-9a16-a8865b2c3774_3.b3be01fcc4c956f51fe3890589897d31.jpeg', description: 'this is an apple', category: 'fruit', cost: 10, inStock: 10, cartQuantity: 0},
    // {productName: 'carrot', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv10_Hzl_ZBXTf8GcSz4kecFDGo_YOQvkcbg&usqp=CAU', description: 'this is a carrot', category: 'veggie', cost: 1, inStock: 10, cartQuantity: 0},
    // {productName: 'celery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WNUVhLrSgQJjNd3dl_kozuNRlkx_DRiy-Q&usqp=CAU', description: 'this is celery', category: 'veggie', cost: 1, inStock: 10, cartQuantity: 0},
  ],
};

function productReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'SELECTED_CATEGORY':
        if (payload !== 'all') {
          let filteredproduct = initialState.products.filter((product) => product.category === payload)
          return {products: filteredproduct}
        } 
    return initialState;
    case 'ADD_TO_CART':
      
        let incriment = state.products.map((product) => {
          if (product.productName === payload.productName) {
            if (product.inStock > 0) {
                product.cartQuantity += 1;
                  product.inStock--;
              } 
              else {
                  alert('Item out of stock');
              }
          }
          return product;
        });
        return { ...state, products: incriment };
    case 'FETCH_PRODUCTS':
      return {...state, products: action.payload};
    default:
      return state;
  }
}

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3005/products');
  console.log(response.data.results)
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data.results
  })
}

// export const addProducts = () => async (dispatch) => {
//   const response = await axios.get('http://localhost:3005/products');
//   dispatch({
//     type: 'ADD_PRODUCT',
//     payload: response.data
//   })
// }

export default productReducer;
