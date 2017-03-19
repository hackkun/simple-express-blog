const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  pwd: String,
  avatar: String,
  sex: {
    type: String,
    enum: ['men', 'women']
  },
  'creat_at': {
    type: Date,
    default: Date.now()
  }
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel


