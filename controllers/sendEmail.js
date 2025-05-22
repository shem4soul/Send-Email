const nodemailer  = require('nodemailer')
const sgMail = require('@sendgrid/mail');
const { text } = require('body-parser');

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "orie.mann18@ethereal.email",
        pass: "hWF9mJ66hDFqJ2t4At",
      },
    });

 let info = await transporter.sendMail({
    from: '"Coding Addict  " <shem4soul@gmail.com>',
    to: 'smartresearchers82@gmail.com',
    subject: "Hello",
    html: '<h2>Sending Email with Node.js</h2>'
 })

     res.json(info)
    
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 const msg = {
  to: 'smartresearchers82@gmail.com', // Change to ur recepient email
  from: 'shem4soul@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'an esay to do anywhere, even with nodejs',
  html: '<strong>and easy to do anywhere, even with nodejs</strong>'
 }

 const info = await sgMail.send(msg)
 res.json(info)

}

module.exports = sendEmail