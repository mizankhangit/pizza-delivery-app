import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";

const Home = () => {
  const dispatch = useDispatch();
  const pizzasstates = useSelector((state) => state.getAllPizzas);
  const { pizzas, error, loading } = pizzasstates;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <Filter />
        {loading ? (
          <div className="text-center">
            <Loading />
          </div>
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          pizzas.map((pizza, i) => {
            return (
              <div key={pizza._id} className="col-md-4 p-3">
                <Pizza pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
