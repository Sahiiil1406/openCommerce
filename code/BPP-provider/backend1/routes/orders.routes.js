const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/auth.middleware");

const {
  checkout,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  paymentVerification,
} = require("../controllers/orders.controllers");

router.post("/", validateToken, addOrderItems);
router.get("/mine", validateToken, getMyOrders);
router.get("/:id", validateToken, getOrderById);
router.put("/:id/pay", validateToken, updateOrderToPaid);
router.post("/checkout", validateToken, checkout);
router.post("/paymentverification/:id", validateToken, paymentVerification);

module.exports = router;
