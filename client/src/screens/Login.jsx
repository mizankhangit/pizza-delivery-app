import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 form-container shadow-lg rounded">
          {loading && <Loading />}
          {error && <Error error="Invalid user" />}

          <h2 className="text-center mb-3">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="text-center">
              <Link style={{ textDecoration: "none" }} to="/register">
                Click here to register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
