const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      accessToken: process.env.OAUTH_ACCESS_TOKEN
    }
});

let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: '46585r@unibit.bg',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};

transporter.sendMail(mailOptions, function(err, data) {
if (err) {
    console.log("Error " + err);
} else {
    console.log("Email sent successfully");
}
});