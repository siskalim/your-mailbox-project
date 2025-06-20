const Email = require('../models/Email');

// Simpan email baru
exports.receiveEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    const email = new Email({ to, subject, message });
    await email.save();
    res.status(201).json({ message: 'Email saved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save email' });
  }
};

// Tampilkan semua email untuk alamat tertentu
exports.getInbox = async (req, res) => {
  const emailAddress = req.params.email;

  try {
    const emails = await Email.find({ to: emailAddress }).sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inbox' });
  }
};

// (Opsional) Tampilkan semua email dari semua pengguna
exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emails' });
  }
};
