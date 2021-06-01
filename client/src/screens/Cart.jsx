import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "./../actions/cartActions";

import MinusIcon from "../components/icons/MinusIcon";
import PlusIcon from "../components/icons/PlusIcon";
import TrashIcon from "../components/icons/TrashIcon";
import Checkout from "../components/Checkout";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((curr, item) => curr + item.price, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>My Cart</h2>
          {cartItems.map((item, i) => (
            <div key={i} className="cart-items">
              <div>
                <h4>{item.name}</h4>
                <h5>
                  Price: {item.quantity} x {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h5>
                <div className="d-flex align-items-center">
                  <h5 className="d-inline" style={{ marginBottom: 0 }}>
                    Quantity:{" "}
                  </h5>
                  <div className="d-flex align-items-center cart-qty">
                    <span
                      className="cart-plus-icon"
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        )
                      }
                    >
                      <PlusIcon />
                    </span>
                    <b style={{ fontSize: "20px" }}>{item.quantity}</b>
                    <span
                      className="cart-minus-icon"
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        )
                      }
                    >
                      <MinusIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <span onClick={() => dispatch(deleteFromCart(item))}>
                <TrashIcon className="cart-trash-icon" />
              </span>
            </div>
          ))}
        </div>
        <div className="col-md-5 " style={{ textAlign: "right" }}>
          <h2>SubTotal: {subtotal}</h2>
          {/* <button className="btn btn-primary">Check Out</button> */}
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
