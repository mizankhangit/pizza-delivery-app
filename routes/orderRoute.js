const express = require("express");
const stripe = require("stripe")("sk_test_4Eoe6mm7cn4YKg2Yk6rSr3jA00QUg0dRBw");
const { v4: uuidv4 } = require("uuid");
const Order = require("./../models/orderModel");

const router = express.Router();

router.post("/placeorder", async (req, res) => {
  try {
    const { token, subtotal, currentUser, cartItems } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const neworder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });

      neworder.save();

      res.status(200).json({
        status: "success",
        message: "Order placed successfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});

router.post("/getuserorders", async (req, res) => {
  try {
    const { userid } = req.body;
    const orders = await Order.find({ userid: userid }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});

router.get("/getallorders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderid = req.body.orderId;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDelivered = true;
    res.send("Order delivered successfully");
    await order.save();
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});

module.exports = router;
