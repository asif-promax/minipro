const User = require("../models/user");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const user = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !passwod) {
      return res.status(400).json({ message: "data not found" });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ msg: "alredy exist" });
    }
    user = new User({ name, email, password });
    await user.save();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "data not found" });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "invalid" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "invalid" });
    }
    const id=user.id;
    return res.status(201).json({msg:"login successfull",id})
  } catch (error) {
    console.error(error);
    res.status(500).send('server error')
  }
};
