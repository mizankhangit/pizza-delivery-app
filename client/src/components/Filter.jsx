import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

const Filter = () => {
  const [searchkey, setSearchkey] = useState("");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPizzas(searchkey, category));
  };

  console.log(searchkey, category);

  return (
    <div className="filter-container shadow">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type pizza name"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Nonveg</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
