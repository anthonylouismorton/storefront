//import items from './item.js'
import axios from 'axios'
let dbCategories = { displayName: 'all', normalizedName: 'all', description: 'display all products'}
let initialState = {
  category: [
    //dbCategories
    // {displayName:'all', normalizedName: 'all', description:'all products'}, 
    // {displayName:'fruit', normalizedName: 'fruit', description:'all fruits'}, 
    // {displayName:'veggie',normalizedName:'veggie', description:'all veggies'},
    ],
  currentCategory: null,
}
function categoryReducer(state = initialState, action){
  let {type, payload} = action

  switch(type){
    case 'SELECTED_CATEGORY':      
      if(payload === 'all'){
        return {category: state.category, currentCategory: payload}
      }
      else if(payload === 'fruit'){
        return {category: state.category, currentCategory: payload}
      }
      else if(payload === 'veggie'){
        return {category: state.category, currentCategory: payload}
      }
      return initialState
    case 'FETCH_CATEGORIES':
      return {...state, category: action.payload}
    default:
      return state;
  }
}
export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/categories`);
  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data.results
  })
}
export default categoryReducer;