import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import EditIcon from "../components/icons/EditIcon";
import TrashIcon from "../components/icons/TrashIcon";
import Loading from "../components/Loading";

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzasstates = useSelector((state) => state.getAllPizzas);
  const { pizzas, error, loading } = pizzasstates;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <div className="text-center">
        <h4 style={{ margin: "15px" }}>Pizzas List</h4>
      </div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => (
              <tr key={pizza._id}>
                <td>{pizza.name}</td>
                <td>
                  Small: {pizza.prices[0]["small"]} <br />
                  Medium: {pizza.prices[0]["medium"]} <br />
                  Large: {pizza.prices[0]["large"]}
                </td>
                <td>{pizza.category}</td>
                <td>
                  <div className="pizza-actions">
                    <span
                      className="trash-icon"
                      onClick={() => dispatch(deletePizza(pizza._id))}
                    >
                      <TrashIcon />
                    </span>
                    <Link to={`/admin/edit/${pizza._id}`} className="edit-icon">
                      <EditIcon />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default PizzasList;
