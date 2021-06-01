export const addToCart = (pizza, quantity, varient) => {
  return (dispatch, getState) => {
    const cartItem = {
      _id: pizza._id,
      name: pizza.name,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    };

    if (cartItem.quantity > 10) {
      alert("You cannot add more than 10 quantities");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
