const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
  },

  product_name: {
    type: String,
    required: true,
  },

  product_quantity: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
