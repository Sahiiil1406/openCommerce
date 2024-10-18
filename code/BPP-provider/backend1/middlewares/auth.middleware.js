const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

export const validateToken = async (req, res, next) => {
  const { token } = req.body;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.userId).select("-password");
      console.log(req.user);
      next();
    } catch (error) {
      res.status(404).json({ mssg: "Token doesnot match" });
    }
  } else {
    res.status(404).json({ mssg: "Token not found" });
  }
};
