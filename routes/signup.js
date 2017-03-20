const path = require('path')
const fs = require('fs')
const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const User = require('../models/user')
const checkNotLogin = require('../middlewares/check').checkNotLogin
const MD5 = require('../libs/md5')

// GET 注册页
router.get('/', checkNotLogin, (req, res) => {
  res.render('signup')
})

// POST 用户注册
router.post('/', checkNotLogin, (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    User.find({ user: fields.user }, (err, result) => {
      if (result.length !== 0) {
        req.flash('error', '该账户已注册')
        res.redirect('/signup')
        return
      }
      const users = {
        user: fields.user,
        pwd: MD5(fields.pwd),
        sex: fields.sex
      }
      const extname = path.extname(files.avatar.name)
      const oldPath = files.avatar.path
      const newPath = path.join(__dirname, '/../upload/' + users.user + extname)
      User.create(users, (err, result) => {
        if (err) {
          res.redirect('/signup')
          return
        }
        fs.rename(oldPath, newPath, err => {
          if (err) {
            req.flash('error', '图片上传失败')
            res.redirect('/signup')
          } else {
            req.flash('success', '注册成功')
            req.session.user = users.user
            res.redirect('/')
          }
        })
      })
    })
  })
})

module.exports = router