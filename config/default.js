module.exports = {
  port: 3000,
  session: {
    secret: 'hackblog',
    key: 'hackblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/hackblog'
}