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

router.post("/add", validateToken, addOrderItems);
router.get("/mine", validateToken, getMyOrders);
router.get("/getbyID", validateToken, getOrderById);

//payment verification route
router.put("/get/:id/pay", validateToken, updateOrderToPaid);
router.post("/checkout", validateToken, checkout);
router.post("/paymentverification/:id", validateToken, paymentVerification);


module.exports = router;
