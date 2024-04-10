const initialState = {
    categoryFilter: "",
    items: [],
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_FILTER':
        return {
          ...state,
          categoryFilter: action.payload,
        };
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'SET_CART_ITEMS':
        return {
          ...state,
          cartItems: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
