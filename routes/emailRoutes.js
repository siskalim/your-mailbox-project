const express = require('express');
const router = express.Router();
const { receiveEmail, getInbox, getAllEmails } = require('../controllers/emailController');

// POST email baru
router.post('/emails', receiveEmail);

// GET inbox berdasarkan alamat email
router.get('/emails/:email', getInbox);

// GET semua email (opsional)
router.get('/emails', getAllEmails);

module.exports = router;
