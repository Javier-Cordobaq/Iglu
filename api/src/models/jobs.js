const { Schema, model } = require('mongoose')
const jobs = new Schema({
  name: String,
  description: String
}
)
module.exports = model('jobs', jobs)
