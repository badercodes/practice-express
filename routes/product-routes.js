// migrate product routes from server.js to here
// I want to declare "/products" as a variable and use string concatenation
// for the additional routes products + "/tomatoes"
const express = require("express");
const router = express.Router();

// import my DB Model
const ProductModel = require("../models/ProductModel.js");

router.get("/", (req, res) => {
  res.send("You landed on Products Home");
});
router.post("/add", (req, res) => {
  const productEntry = {
    product_id: req.body.product_id,
    product_name: req.body.product_name,
    product_quantity: req.body.product_quantity,
  };

  ProductModel.create(productEntry)
    .then((someReturn) => res.send(someReturn))
    .catch((err) => console.log(err));

  // res.send("<p>You landed on <strong> ADD </strong> Products</p>");
  console.log(productEntry);
});

router.get("/edit", (req, res) =>
  res.send("<p>You landed on <strong>EDIT </strong> Products</p>")
);

router.get("/delete", (req, res) =>
  res.send("<p>You landed on <strong> DELETE </strong> Products </p>")
);

module.exports = router;
