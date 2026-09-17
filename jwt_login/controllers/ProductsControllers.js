const Product = require("../model/ProductModel");
const wrapAsync = require("../utils/wrapAsync");

const getProducts = wrapAsync(async (req, res) => {
  let products = await Product.find({});
  return res.status(200).json({
    message: "data successfully retrived",
    success: true,
    products,
  });
});

module.exports = { getProducts };
