const express = require("express");
const validateToken = require("../middlewares/auth.middleware");
const {
  registerUser,
  logoutUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/users.controllers");

const router = express.Router();

router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.get("/profile", validateToken, getUserProfile);
router.put("/profile", validateToken, updateUserProfile);

module.exports = router;
