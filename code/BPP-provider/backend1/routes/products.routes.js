const express = require("express");
const  validateToken = require("../middlewares/auth.middleware");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  createProductReview,
  deleteProduct,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
//create review for a product
router.post("/:id/reviews", validateToken, createProductReview);
router.post("/", validateToken, createProduct);
router.delete("/:id", validateToken, deleteProduct);

module.exports = router;
