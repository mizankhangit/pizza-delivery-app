import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const res = await axios.post("/api/users/register", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const res = await axios.post("/api/users/login", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const logoutUser = () => () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get("/api/users/getallusers");
    console.log(res);
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAILED", payload: error });
  }
};

export const deleteUser = (userid) => async () => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    alert("User deleted successfully");
    window.location.reload();
  } catch (error) {
    console.log("Something went wrong");
  }
};
