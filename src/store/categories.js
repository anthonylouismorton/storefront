//import items from './item.js'

let initialState = {
  category: [
    {displayName:'all', normalizedName: 'all', description:'all products'}, 
    {displayName:'fruit', normalizedName: 'fruit', description:'all fruits'}, 
    {displayName:'veggie',normalizedName:'veggie', description:'all veggies'},
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
      return initialState
    default:
      return state;
  }
}

export default categoryReducer;