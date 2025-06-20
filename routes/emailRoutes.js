const express = require('express');
const router = express.Router();
const { receiveEmail, getInbox } = require('../controllers/emailController');

router.post('/email', receiveEmail);
router.get('/inbox/:email', getInbox);

module.exports = router;
