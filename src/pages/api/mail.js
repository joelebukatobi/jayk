const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    await mail.send({
      to: 'jay_academy@yahoo.com',
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: req.body.message.replace(/\r\n/g, '<br>'),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ status: error.message });
  }
  return res.status(200).json({ status: 'Ok' });
};
