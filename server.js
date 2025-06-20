const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env

console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

const emailRoutes = require('./routes/emailRoutes');
app.use('/api', emailRoutes);

// 🔧 CONNECT ke MongoDB Atlas via URI di .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
})
.catch(err => {
  console.error('❌ Connection failed:', err);
});
