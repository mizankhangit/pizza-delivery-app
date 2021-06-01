import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Loading from "./../components/Loading";
import Error from "./../components/Error";
import Success from "./../components/Success";

const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
    console.log(token);
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your order placed successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="USD"
        stripeKey="pk_test_Ced6Vl9qRnD7pL8xsBKHDW1G00cloil9kG"
      >
        <button className="btn btn-primary">Pay now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
