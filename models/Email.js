const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  to: String,
  subject: String,
  message: String,
  receivedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Email', emailSchema);
