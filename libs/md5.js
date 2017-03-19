const crypto = require('crypto')

module.exports = text => {
  var hasher = crypto.createHash('md5')
  hasher.update(text)
  return hasher.digest('hex')
}