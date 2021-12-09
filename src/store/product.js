let initialState= {
  products: [
    {productName: 'banana', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XGxPCEjJtOmxnAqJ3xu_2VFYvuoSPDIJXg&usqp=CAU', description: 'this is a carrot', category: 'fruit', cost: 1, count: 1},
    {productName: 'apple', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.heb.com%2Fis%2Fimage%2FHEBGrocery%2F000375146&imgrefurl=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ffresh-gala-apples%2F375146&tbnid=N40DRqb0oogxtM&vet=12ahUKEwiskLPt6dX0AhX8ATQIHWPDCCUQMygSegUIARC9Ag..i&docid=MW3VS3uOnRIDuM&w=2414&h=2414&itg=1&q=apple&ved=2ahUKEwiskLPt6dX0AhX8ATQIHWPDCCUQMygSegUIARC9Ag', description: 'this is an apple', category: 'fruit', cost: 1, count: 1},
    {productName: 'carrot', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv10_Hzl_ZBXTf8GcSz4kecFDGo_YOQvkcbg&usqp=CAU', description: 'this is a carrot', category: 'veggie', cost: 1, count: 1},
    {productName: 'celery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WNUVhLrSgQJjNd3dl_kozuNRlkx_DRiy-Q&usqp=CAU', description: 'this is celery', category: 'veggie', cost: 1, count: 1},
  ],
};

function productReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'SELECTED_CATEGORY':
        if (payload !== 'ALL') {
          let filteredproduct = state.products.filter(product => product.category === payload)
          return {products: filteredproduct}
        } 
    break;
    default:
      return state;
  }
}

export default productReducer;
