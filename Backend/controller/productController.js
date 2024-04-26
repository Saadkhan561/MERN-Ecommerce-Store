const mongoose = require("mongoose");
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json("Invalid Id");
  } else {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      res.status(500).json("Product not found");
    } else {
      res.status(200).json(product);
    }
  }
};

const postProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    brand,
    quantityAvailable,
    imageUrl,
  } = await req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      quantityAvailable,
      imageUrl,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllProducts, postProduct, getProductById };
