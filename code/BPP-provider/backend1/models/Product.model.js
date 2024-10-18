const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    context: {
      type: Object,
      default: {
        location: {
          type: String,
          default: "India",
        },
        currency: {
          type: String,
          default: "INR",
        },
        url: {
          type: String,
          default: "http://localhost:8002",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
