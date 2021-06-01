import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const res = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS", payload: res.data });
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDER_REQUEST" });
  try {
    const res = await axios.post("/api/orders/getuserorders", {
      userid: currentUser._id,
    });
    dispatch({ type: "GET_USER_ORDER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDER_FAILED", payload: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: "GET_ALLORDERS_REQUEST" });
  try {
    const res = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: error });
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  try {
    await axios.post("/api/orders/deliverorder", { orderId });
    alert("Order delivered");
    const orders = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: orders.data });
  } catch (error) {
    console.log(error);
  }
};
