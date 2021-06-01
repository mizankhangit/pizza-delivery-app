import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

const EditPizza = ({ match }) => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const editpizzastate = useSelector((state) => state.editPizzaReducer);
  const { editloading, editsuccess } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setName(pizza.name);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImageUrl(pizza.image);
        setCategory(pizza.category);
        setDescription(pizza.description);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch, match.params.pizzaid]);

  const submitHandler = (e) => {
    e.preventDefault();
    const editedpizza = {
      _id: match.params.pizzaid,
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
    dispatch(editPizza(editedpizza));
  };

  return (
    <div className="container">
      <div className="text-center">
        <h4 style={{ margin: "15px" }}>Edit Pizza</h4>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Pizza edited successfully" />}
        {editloading && <Loading />}
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
              Edit Pizza
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPizza;
