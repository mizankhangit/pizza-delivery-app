export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        ...state,
        pizzas: action.payload,
        loading: false,
      };
    case "GET_PIZZAS_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        ...state,
        pizza: action.payload,
        loading: false,
      };
    case "GET_PIZZABYID_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZA_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
      };
    case "ADD_PIZZA_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_PIZZA_REQUEST":
      return {
        ...state,
        editloading: true,
      };
    case "EDIT_PIZZA_SUCCESS":
      return {
        ...state,
        editsuccess: true,
        editloading: false,
      };
    case "EDIT_PIZZA_FAILED":
      return {
        ...state,
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};
