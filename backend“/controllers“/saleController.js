const Sale = require('../models/Sale');
const Product = require('../models/Product');

exports.makeSale = async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);

  if (!product || product.stock < quantity) {
    return res.status(400).json({ message: 'Not enough stock' });
  }

  const totalPrice = product.price * quantity;

  const sale = new Sale({ productId, quantity, totalPrice });
  await sale.save();

  product.stock -= quantity;
  await product.save();

  res.json(sale);
};