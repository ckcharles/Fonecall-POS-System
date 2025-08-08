const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));