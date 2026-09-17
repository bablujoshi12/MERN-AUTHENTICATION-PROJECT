const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/ProductsControllers");
const { isAuthentication } = require("../middlewares/ProductsMiddlewares");

router.get("/products", isAuthentication, getProducts);

module.exports = router;
