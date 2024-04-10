export const setCategoryFilter = (category) => ({
  type: "SET_CATEGORY_FILTER",
  payload: category,
});
export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});
export const setCartItems = (items) => ({
  type: "SET_CART_ITEMS",
  payload: items,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
    payload: item,
  
});
