const express = require('express')
const router = express.Router()
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET 注册页
router.get('/', checkNotLogin, (req, res) => {
  res.send(req.flash())
})

// POST 用户注册
router.post('/', checkNotLogin, (req, res) => {
  res.send(req.flash())
})

module.exports = router