import axios from 'axios';

let initialState = {
  cart: [],
  totalItems: 0
}


function cartReducer(state = initialState, action) {

  let { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
        if (payload.inventoryCount === 0) {
            return state;
        } else {
            return {
                cart: [...state.cart, payload.name],
                totalItems: state.totalItems + 1,
            };
        }
  // switch(type) {
  //   case 'ADD_TO_CART':
  //       if (payload) {
  //         if(state.cart.includes(payload)){
  //           payload.cartQuantity++;
  //           return{...state, totalItems: state.totalItems + 1};
  //         }
  //         else{
  //           payload.cartQuantity = 1;
  //           state.totalItems++;
  //           return{...state, cart: [...state.cart, payload]}
  //         }
          
  //       } 
    return initialState;
    case 'REMOVE_FROM_CART':
        if(payload){
    
          if(state.cart.includes(payload.name)){
            if(payload.cartQuantity === 1){
              let item = state.cart.indexOf(payload)
              state.cart.slice(item,1)
              return{...state, totalItems: state.totalItems - 1}
            }
            else if(payload.cartQuantity > 1){
              payload.cartQuantity--;
              return{...state, totalItems: state.totalItems - 1}
            }
            else{
              return{...state, cart: [...state.cart]}
            }
          }
        }
    case 'FETCH_CART':
    return {cart: payload};
    default:
      return state;
  }
}
export const fetchCart = () => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/cart`);
  dispatch({
    type: 'FETCH_CART',
    payload: response.data.results
  })
}

export default cartReducer;
