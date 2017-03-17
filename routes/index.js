const postsRouter = require('./posts')
const signinRouter = require('./signin')
const signoutRouter = require('./signout')
const signupRouter = require('./signup')

module.exports = app => {

  app.get('/', (req, res) => {
    res.send('hello, 我是首页')
  })

  app.use('/signup', signupRouter)
  app.use('/signin', signinRouter)
  app.use('/signout', signoutRouter)
  app.use('/posts', postsRouter)

  app.use((req, res, next) => {
    res.status(500).render('error', {
      errmsg: 'Not Found'
    })
  })

}