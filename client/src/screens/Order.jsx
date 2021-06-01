import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "./../components/Loading";
import Error from "./../components/Error";

const Order = () => {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="text-center">
        <h2>My Orders</h2>
      </div>
      <div className="orders">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => (
            <div key={order._id} className="order-container">
              <div>
                <h3>Items</h3>
                {order.orderItems.map((item) => (
                  <h5 key={item._id}>
                    {item.name} [{item.varient}] x {item.quantity} ={" "}
                    {item.price}
                  </h5>
                ))}
              </div>
              <div>
                <h3>Address</h3>
                <h5>Street: {order.shippingAddress.street}</h5>
                <h5>City: {order.shippingAddress.city}</h5>
                <h5>Country: {order.shippingAddress.country}</h5>
                <h5>Pincode: {order.shippingAddress.pincode}</h5>
              </div>
              <div>
                <h3>Order Information</h3>
                <h5>Order Amount: {order.orderAmount}</h5>
                <h5>Date: {order.createdAt.substring(0, 10)}</h5>
                <h5>Transaction Id: {order.transactionId}</h5>
                <h5>Order Id: {order._id}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Order;
