const express = require("express");
const router = express.Router();
const validateToken = require("../middlewares/auth.middleware");

const {
  checkout,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  paymentVerification,
} = require("../controllers/orders.controllers");

router.post("/create",validateToken, addOrderItems);
router.post("/get",validateToken, getMyOrders);
router.post("/getOrderById", getOrderById);

//payment verification route
router.put("/get/:id/pay", validateToken, updateOrderToPaid);
router.post("/checkout", validateToken, checkout);
router.post("/paymentverification/:id", validateToken, paymentVerification);


module.exports = router;
