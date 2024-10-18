require("dotenv").config();
const express = require("express");
const ProductRouter = require("./routes/products.routes");
const UserRouter = require("./routes/users.routes");
const OrderRouter = require("./routes/orders.routes");
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const { connectToDatabase } = require("./config/db");
const path = require("path");

const port = process.env.PORT;

const app = express();

// setting up the current directory because in modulejs __dirname is not available
const fullPath = path.resolve(__dirname);

module.exports = { fullPath };
//predefined middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  "/api/uploads",
  express.static(path.resolve(__dirname, "public/images"))
);

app.get("/", (req, res) => {
  res.send("Api is up and running!!⚙️");
});

app.use("/product", ProductRouter);
app.use("/user", UserRouter);
app.use("/order", OrderRouter);


const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = {
  instance,
};

// route to get the razorpay id
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ razorpayId: process.env.RAZORPAY_API_ID });
});

app.listen(port, () => {
  connectToDatabase();
  console.log(`Server is running at port ${port} 🪛`);
});
