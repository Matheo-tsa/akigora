const mongoose = require('mongoose')

const ProfileModel = mongoose.Schema({
  type: String,
  userId: String,

  temporaryInvisible: Boolean,
  domains: String,
  title: String,
  location: String,
  descripton: String,
  mission: String,
  mainSkills: String,
  languages: String,
  tools: String,
})

module.exports = mongoose.model('Profile', ProfileModel)
