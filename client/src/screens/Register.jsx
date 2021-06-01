import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;
  console.log(error);

  const submitHandler = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    if (password !== cpassword) {
      alert("Password not matched!");
    }

    dispatch(registerUser(user));

    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 form-container shadow-lg rounded">
          {loading && <Loading />}
          {success && <Success success="User register successfully" />}
          {error && <Error error="Something went wrong" />}

          <h2 className="text-center mb-3">Register</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Enter confirm password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <div className="text-center">
              <Link style={{ textDecoration: "none" }} to="/login">
                Click here to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
