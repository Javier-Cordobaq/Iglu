require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

async function verificationEmail (email, token) {
  return transporter.sendMail({
    from: 'Saitama Donotreply <donotreply@saitamatoken.com>', // sender address
    to: email, // list of receivers
    subject: 'Verification', // Subject line
    text: 'Tu código de verificación es:', // plain text body
    html: `<h2>${token}</h2>` // html body
  })
}
async function passwordEmail (email, token) {
  return transporter.sendMail({
    from: 'Saitama Donotreply <donotreply@saitamatoken.com>', // sender address
    to: email, // list of receivers
    subject: 'Password', // Subject line
    text: 'Tu código de recuperacion:', // plain text body
    html: `<h2>${token}</h2>` // html body
  })
}

module.exports = {
  verificationEmail,
  passwordEmail
}
