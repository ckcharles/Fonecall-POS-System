const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  totalPrice: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sale', SaleSchema);