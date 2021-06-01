import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

const AddPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  const submitHandler = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image: imageUrl,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));

    setName("");
    setSmallPrice("");
    setMediumPrice("");
    setLargePrice("");
    setImageUrl("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      <div className="text-center">
        <h4 style={{ margin: "15px" }}>Add Pizza</h4>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New pizza added successfully" />}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={submitHandler} className="shadow p-4 rounded">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Pizza name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Small varient price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter small varient price"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Medium varient price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter medium varient price"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Large varient price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter large varient price"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Image url</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter image url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Pizza category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Pizza
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPizza;
