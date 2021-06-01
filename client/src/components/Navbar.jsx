import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { cartItems } = cartstate;
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-white rounded">
      <Link className="navbar-brand" to="/">
        Pizza
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{ marginLeft: "auto" }}>
          {currentUser ? (
            // {currentUser.name.split(" ")[0]}
            <div className="dropdown show dropdown-nav">
              <a
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  marginTop: "8px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {currentUser.name.split(" ")[0]}
              </a>

              <div
                className="_dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ position: "absolute" }}
              >
                <Link className="dropdown-item" to="/orders">
                  Orders
                </Link>
                {currentUser.isAdmin === true && (
                  <Link className="dropdown-item" to="/admin">
                    Dashboard
                  </Link>
                )}
                <li
                  style={{ cursor: "pointer" }}
                  className="dropdown-item"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </li>
              </div>
            </div>
          ) : (
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart {cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
