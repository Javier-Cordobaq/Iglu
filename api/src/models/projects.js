const { Schema, model } = require('mongoose')
const project = new Schema({
  name: String,
  description: String,
  url: String,
  images: {
    type: Object
  },
  color: String,
  socialNetworks: {
    type: Object
  },
  type: String,
  logo: String,
  client: String,
  creators: [{
    type: Object
  }]
}, { strict: false })
module.exports = model('projects', project)
