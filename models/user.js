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
  'create_at': {
    type: Date,
    default: Date.now()
  }
})

userSchema.statics.isExistName = function (user) {
  return new Promise((resolve, reject) => {
    this.model('users').findOne({ user: user }, (err, result) => {
      if (err) return
      resolve(result)
    })
  })
}

const userModel = mongoose.model('users', userSchema)

module.exports = userModel


