import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Pizza = ({ pizza }) => {
  const [qty, setQty] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addtocart = () => {
    dispatch(addToCart(pizza, qty, varient));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "300px", width: "auto" }}>
            <img
              src={pizza.image}
              alt={pizza.name}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <p className="mt-2">{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="_m-4 shadow p-3 mb-3 bg-white rounded">
        <div onClick={handleShow}>
          <h1>{pizza.name}</h1>
          <div style={{ height: "300px", width: "auto" }}>
            <img
              src={pizza.image}
              alt={pizza.name}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="d-flex">
          <div className="w-100 m-1">
            <p>Varients</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((varient, i) => {
                return (
                  <option key={i} value={varient}>
                    {varient}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select
              className="form-control"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(10).keys()].map((qty, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="m-1 w-100">
            <h1 className="m-0">Price: {pizza.prices[0][varient] * qty}</h1>
          </div>
          <div className="m-1 w-100">
            <button
              onClick={addtocart}
              className="btn bg-danger text-white w-100"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
