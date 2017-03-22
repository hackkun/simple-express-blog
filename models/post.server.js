const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  tit: String,
  content: String,
  'create_at': {
    type: Date,
    default: Date.now()
  }
})

const postModel = mongoose.model('posts', postSchema)

module.exports = postModel


