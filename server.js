const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const emailRoutes = require('./routes/emailRoutes');
app.use('/api', emailRoutes);

// Koneksi ke MongoDB (gunakan atlas atau koneksi public)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Connection failed:', err));

// Worker-compatible export
const { default: serverlessExpress } = require('@codegenie/serverless-express');

export default {
  async fetch(request, env, ctx) {
    return await serverlessExpress({
      app
    })(request, env, ctx);
  }
}
