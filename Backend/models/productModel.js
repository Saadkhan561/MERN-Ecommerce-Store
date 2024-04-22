const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  quantityAvailable: { type: Number, default: 0 },
  imageUrl: { type: String },
});

mongoose.exports = mongoose.model('Product', productSchema)