const { Schema, model } = require('mongoose')
const project = new Schema({
  name: String,
  description: String,
  url: String,
  images: [{
    type: Object
  }],
  color: String,
  socialNetworks:{
    type: Object
  },
  type: String,
}, { strict: false })
module.exports = model('projects', project)
