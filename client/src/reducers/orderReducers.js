export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "PLACE_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_ORDER_SUCCESS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case "GET_USER_ORDER_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_ALLORDERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALLORDERS_SUCCESS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case "GET_ALLORDERS_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
