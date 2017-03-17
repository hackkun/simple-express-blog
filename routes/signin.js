const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET 登录页
router.get('/', checkNotLogin, (req, res) => {
  res.send(req.flash())
})

// POST 用户登录
router.post('/', checkNotLogin, (req, res) => {
  res.send(req.flash())
})

module.exports = router