const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const emailRoutes = require('./routes/emailRoutes');
app.use('/api', emailRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Connection failed:', err));

const { default: serverlessExpress } = require('@codegenie/serverless-express');
const handler = serverlessExpress({ app });

export default {
  async fetch(request, env, ctx) {
    return await handler(request, env, ctx);
  }
};
