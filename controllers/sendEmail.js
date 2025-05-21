const nodemailer  = require('nodemailer')


const sendEmail = async (req, res) => {
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

module.exports = sendEmail