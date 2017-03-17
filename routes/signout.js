const express = require('express')
const router = express.Router()
var checkLogin = require('../middlewares/check').checkLogin

// GET 登出
router.get('/', checkLogin, (req, res) => {
  res.send(req.flash())
})

module.exports = router