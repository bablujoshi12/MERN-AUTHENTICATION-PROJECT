require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const ExpressError = require("./utils/expressError");
const UserRouter = require("./routes/UserRouter");
const ProductsRouter = require("./routes/ProductsRouter");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/", UserRouter);
app.use("/", ProductsRouter);

// 404 Middleware
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;

  res.status(status).json({
    message,
    success: false,
  });
});

// Database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");

    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
