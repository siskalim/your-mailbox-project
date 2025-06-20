const Email = require('../models/Email');

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

exports.getInbox = async (req, res) => {
  const emailAddress = req.params.email;
  try {
    const emails = await Email.find({ to: emailAddress }).sort({ receivedAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inbox' });
  }
};
