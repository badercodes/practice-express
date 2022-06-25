// migrate product routes from server.js to here
// I want to declare "/products" as a variable and use string concatenation
// for the additional routes products + "/tomatoes"
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You landed on Products Home");
});
router.get("/add", (req, res) =>
  res.send("<p>You landed on <strong> ADD </strong> Prodcuts</p>")
);

router.get("/edit", (req, res) =>
  res.send("<p>You landed on <strong>EDIT </strong> Products</p>")
);

router.get("/delete", (req, res) =>
  res.send("<p>You landed on <strong> DELETE </strong> Products </p>")
);

module.exports = router;
