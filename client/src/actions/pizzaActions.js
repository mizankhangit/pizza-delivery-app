import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getallpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data.pizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/getpizzabyid", { pizzaid });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error });
  }
};

export const filterPizzas = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    let filteredPizzas;
    const res = await axios.get("/api/pizzas/getallpizzas");

    filteredPizzas = res.data.pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredPizzas = res.data.pizzas.filter(
        (pizza) => pizza.category === category
      );
    }

    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/addpizza", { pizza });
    console.log(res);
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};

export const editPizza = (editedpizza) => async (dispatch) => {
  dispatch({ type: "EDIT_PIZZA_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/editpizza", { editedpizza });
    console.log(res);
    dispatch({ type: "EDIT_PIZZA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EDIT_PIZZA_FAILED", payload: error });
  }
};

export const deletePizza = (pizzaid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/pizzas/deletepizza", { pizzaid });
    alert("Pizza deleted successfully");
    console.log(res);
  } catch (error) {
    alert("Something went wrong");
  }
};
