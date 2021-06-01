import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddPizza from "./AddPizza";
import OrdersList from "./OrdersList";
import PizzasList from "./PizzasList";
import UsersList from "./UsersList";

const Admin = () => {
  const [block, setBlock] = useState(1);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser.isAdmin]);

  return (
    <div className="container">
      <div className="text-center" style={{ marginBottom: 20 }}>
        <h1>Admin panel</h1>
      </div>
      <ul className="admin-function-lists">
        <li
          className={`${block === 1 ? "active" : ""}`}
          onClick={() => setBlock(1)}
        >
          Users List
        </li>
        <li
          className={`${block === 2 ? "active" : ""}`}
          onClick={() => setBlock(2)}
        >
          Pizzas List
        </li>
        <li
          className={`${block === 3 ? "active" : ""}`}
          onClick={() => setBlock(3)}
        >
          Add New Pizza
        </li>
        <li
          className={`${block === 4 ? "active" : ""}`}
          onClick={() => setBlock(4)}
        >
          Orders List
        </li>
      </ul>

      {block === 1 && <UsersList />}
      {block === 2 && <PizzasList />}
      {block === 3 && <AddPizza />}
      {block === 4 && <OrdersList />}
    </div>
  );
};

export default Admin;
