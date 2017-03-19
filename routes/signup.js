const path = require('path')
const fs = require('fs')
const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const UserModel = require('../models/user')
const checkNotLogin = require('../middlewares/check').checkNotLogin
const MD5 = require('../libs/md5')

// GET 注册页
router.get('/', checkNotLogin, (req, res) => {
  res.render('signup')
})

// POST 用户注册
router.post('/', checkNotLogin, (req, res) => {
  const form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.uploadDir = path.join(__dirname + '/../public/img')
  form.parse(req, (err, fields, files) => {
    const nPath = '/img/img.png'
    const users = {
      user: fields.user,
      pwd: MD5(fields.pwd),
      sex: fields.sex
    }
    // UserModel.create(users, (err, res) => {
    //   console.log(err, res)
    // })
    fs.rename(files.avatar.path, nPath, err => {
      console.log(err)
    })
  })
})

module.exports = router