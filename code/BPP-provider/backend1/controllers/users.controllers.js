const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user=await User.findOne({email})
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"})
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    return res.status(200).json({
     user:user,
      token:token
    });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ mssg: "User already exists" });
    }
    
console.log("Hello")

    const user = await User.create({
      name,
      email,
      password,
    });

console.log("jnsn")
    if(!user){
      return res.status(400).json({message:"Not able to create user"})
    }
    return res.status(201).json({
      user:user
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ mssg: "User logged out successfully" });
};

const getUserProfile = async (req, res) => {
  //we are logged in means we have a token which ensures that we are logged in and we have access to the req.user object it is basically a document without the password
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404).json({ mssg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messsage });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      (user.name = req.body.name || user.name),
        (user.email = req.body.email || user.email);
      if (req.body.password) {
        user.password = req.body.password;
      }
    }

    const updatedUser = await user.save();
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  logoutUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};
