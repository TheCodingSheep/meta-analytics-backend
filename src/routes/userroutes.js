const express = require("express");
const User = require("../models/User");
const router = express.Router();
const UserManagementService = require("../services/UserManagementService");

router.post("/signUp", (req, res) => {
  //in post we get data in req.body
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user is already registered with this email" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json({ msg: "user created", _id: newUser._id });
    }
    // const success = UserManagementService.signup(username,email,password)
  });
});
router.post("/signIn", (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    console.log(user);
    if (user.password == req.body.password) {
      return res.status(200).json({ msg: `Hi ${user.username}` });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json({ msg: newUser });
    }
  });
});
module.exports = router;
