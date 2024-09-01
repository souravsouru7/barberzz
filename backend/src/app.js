// backend/src/app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require("cors")
const shopkeeperRoutes = require('./interfaces/routes/ShopkeeperRoutes');
dotenv.config();


const app = express();


app.use(cors())
app.use(express.json());

const dbUri = process.env.DB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });


const authRoutes = require('./interfaces/routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/shopkeepers',shopkeeperRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
