import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  getAllOrdersReducer,
  getUserOrdersReducer,
  placeOrderReducer,
} from "./reducers/orderReducers";
import {
  addPizzaReducer,
  editPizzaReducer,
  getAllPizzasReducer,
  getPizzaByIdReducer,
} from "./reducers/pizzaReducers";
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from "./reducers/userReducers";

const finalReducer = combineReducers({
  getAllPizzas: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhacers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhacers(applyMiddleware(thunk))
);

export default store;
