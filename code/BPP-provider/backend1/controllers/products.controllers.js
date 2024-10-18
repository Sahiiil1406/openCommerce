const Product = require("../models/Product.model");

const getAllProducts = async (req, res) => {
  //here we are creating the query object which is the keywords so here we are searching for the keyword that is coming from the params
  const search = req.body.search
    ? {
        name: {
          $regex: search,
          $options: "i",
        },
      }
    : {};
  try {
    //counting the total number of documents
    // const count = await Product.countDocuments({...search})

    const products = await Product.find({ ...search });

    //sending the products
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Hello")
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ meessage: "Not found!!" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const product = await Product.findById(req.params.id);

    // if product exists
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (review) => review.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400).json({
          message: "Product already reviewed",
        });
      } else {
        const review = {
          name: req.user.name,
          rating: Number(rating),
          comment,
          user: req.user._id,
        };

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating =
          product.reviews.reduce((acc, item) => item.rating + acc, 0) /
          product.reviews.length;

        await product.save();

        res.status(201).json({ message: "Review added" });
      }
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: "Sample name",
      price: 0,
      user: "67124c529a832fa663bda118",
      imageURL: "/images/sample1.jpg",
      brand: "Sample brand",
      category: "Sample category",
      countInStock: 0,
      numReviews: 0,
      description: "Sample description",
    });

    //   creating the product
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  try {
    if (product) {
      await Product.deleteOne({ _id: product._id });
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({
        message: "Product Not Found",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProductReview,
  createProduct,
  deleteProduct,
};
