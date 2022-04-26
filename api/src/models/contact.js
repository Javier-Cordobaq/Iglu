const { Schema, model } = require('mongoose')
const contact = new Schema({
  name: String,
  email: String,
  date: {
    type: Date,
    default: Date.now
  },
  message: String,
  phone: String,
  interesing: String
}
)
module.exports = model('contact', contact)
