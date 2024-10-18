const express = require("express");
const { validateToken } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.get("/profile", validateToken, getUserProfile);
router.put("/profile", validateToken, updateUserProfile);

export default router;
