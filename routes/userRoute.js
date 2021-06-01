const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide right information");
    }
    const newUser = new User({ name, email, password });
    newUser.save();
    res.status(200).json({
      status: "success",
      message: "User register successfully.",
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      error: error,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({
        message: "User login failed.",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findByIdAndDelete({ _id: userid });
    res.send("User deleted successfullly");
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
