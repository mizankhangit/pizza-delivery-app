const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const pizzaRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

const app = express();

mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch(() => console.log("Connection failed."));

app.use(express.json());

app.use("/api/pizzas", pizzaRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client//build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App is running on port 5000"));
