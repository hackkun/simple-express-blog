const express = require('express')
const router = express.Router()
var checkLogin = require('../middlewares/check').checkLogin

// GET 登出
router.get('/', checkLogin, (req, res) => {
  req.session.user = null
  req.flash('success', '退出成功')
  res.redirect('/signup')
})

module.exports = router