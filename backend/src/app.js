// backend/src/app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require("cors")
const shopkeeperRoutes = require('./interfaces/routes/ShopkeeperRoutes');
const initializeAdmin = require('./infrastructure/db/initializeAdmin'); // Import the admin initialization function
const adminRoutes = require('./interfaces/routes/adminRoutes');
dotenv.config();


const app = express();


app.use(cors())
app.use(express.json());

const dbUri = process.env.DB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('MongoDB connected');
  
  
  await initializeAdmin();
})
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });


const authRoutes = require('./interfaces/routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/shopkeepers',shopkeeperRoutes)
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
