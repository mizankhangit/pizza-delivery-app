import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../components/Loading";
import Error from "./../components/Error";
import { deliverOrder, getAllOrders } from "../actions/orderActions";

const OrdersList = () => {
  const allordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, orders, error } = allordersstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <>
      <div className="text-center">
        <h4 style={{ margin: "15px" }}>Orders List</h4>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (
                    <h4 style={{ color: "green" }}>Delevered</h4>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(deliverOrder(order._id))}
                    >
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default OrdersList;
