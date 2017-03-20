const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin
const User = require('../models/user')

// GET 登录页
router.get('/', checkNotLogin, (req, res) => {
  res.render('signin')
})

// POST 用户登录
router.post('/', checkNotLogin, (req, res) => {
  User.isExistName('hack').then(res => {
    console.log(res)
  })
})

module.exports = router