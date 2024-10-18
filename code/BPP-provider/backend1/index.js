require("dotenv").config();
const express = require("express");
const ProductRouter = require("./routes/products.routes");
const UserRouter = require("./routes/users.routes");
const OrderRouter = require("./routes/orders.routes");
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const path = require("path");

const port = process.env.PORT;

const app = express();

// setting up the current directory because in modulejs __dirname is not available
export const __dirname = path.resolve();
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

app.use("/api/products", ProductRouter);
app.use("/api/users", UserRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/upload", uploadRouter);

// razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// route to get the razorpay id
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ razorpayId: process.env.RAZORPAY_API_ID });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port} 🪛`);
});
