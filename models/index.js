const config = require('config-lite')
const mongoose = require('mongoose')

mongoose.connect(config.mongodb)
const db = mongoose.connection

db.on('error', console.error)
db.once('open', () => {
  console.log(`数据库${config.mongodb}连接成功`)
})

module.exports = db