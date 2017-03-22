const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const checkNotLogin = require('../middlewares/check').checkNotLogin
const User = require('../models/user')
const md5 = require('../libs/md5')

// GET 登录页
router.get('/', checkNotLogin, (req, res) => {
  res.render('signin')
})

// POST 用户登录
router.post('/', checkNotLogin, (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    const user = fields.user
    const pwd = md5(fields.pwd)
    User.isExistUser(user).then(result => {
      if (result) {
        if (pwd == result.pwd) {
          req.flash('success', '登录成功')
          req.session.user = user
          res.redirect('/posts')
        } else {
          req.flash('error', '用户名或密码错误')
          res.redirect('/signin')
        }
      } else {
        req.flash('error', '该用户不存在')
        res.redirect('/signin')
      }
    })
  })
})

module.exports = router