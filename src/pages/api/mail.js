const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body.email);

  await mail.send({
    to: 'jayacademy@yahoo.com',
    from: body.email,
    subject: body.subject,
    text: body.message,
    html: body.message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
};
