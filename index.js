const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const config = require('config-lite')
const MongoStore = require('connect-mongo')(session)
const express = require('express')
const pkg = require('./package')
const routes = require('./routes')
const db = require('./models')

const app = express()

// 模板
app.set('view engine', 'ejs')

// 静态文件
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'upload')))

// session中间件
app.use(session({
  name: config.session.key,  // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,  // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true,  // 强制更新 session
  saveUninitialized: true,  // 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge  // 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({  // 将 session 存储到 mongodb
    url: config.mongodb  // mongodb 地址
  })
}))

// flash中间件
app.use(flash())

// 设置模板全局常量
app.locals.blog = {
  name: pkg.name
}

// 添加模板必需的三个变量
app.use((req, res, next) => {
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next()
})

// 路由
routes(app)

const port = process.env.PORT || config.port
app.listen(port, () => {
  console.log(`${pkg.name} listening on port ${port}`)
})