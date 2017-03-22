const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  pwd: String,
  sex: {
    type: String,
    enum: ['men', 'women']
  },
  'create_at': {
    type: Date,
    default: Date.now()
  }
})

userSchema.statics.isExistUser = function (user) {
  return new Promise((resolve, reject) => {
    this.model('users').findOne({ user: user }, (err, result) => {
      if (err) return
      if (result) {
        resolve(result)
      } else {
        resolve(false)
      }
    })
  })
}

const userModel = mongoose.model('users', userSchema)

module.exports = userModel


