//import items from './item.js'

let initialState = {
  category: [
    'all',
    'fruit',
    'veggie'
  ],

  currentCategory: null,
}

function categoryReducer(state = initialState, action){
  let {type, payload} = action
  switch(type){
    case 'SELECTED_CATEGORY':
      if(payload === 'all'){
        return {category: state.category, currentCategory: null }
      }
      else if(state.category.includes(payload)){
        return {category: state.category, currentCategory: payload}
      }
    break;
    default:
      return state;
  }
}

export default categoryReducer;