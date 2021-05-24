const sgMail = require('@sendgrid/mail');

// https://www.twilio.com/blog/how-to-send-emails-in-javascript-with-sendgrid

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//console.log(process.env.SENDGRID_API_KEY)
const msg = {
    to: 'davidfrasermines@gmail.com',
    from: 'davidfrasermines@gmail.com',
    reply: 'davidfrasermines@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);
sgMail.send(msg);
