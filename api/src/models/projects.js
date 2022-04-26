const { Schema, model } = require('mongoose')
const project = new Schema({
  name: String,
  description: String,
  url: String,
  images: [{
    type: Object
  }]
}, { strict: false })
module.exports = model('projects', project)
