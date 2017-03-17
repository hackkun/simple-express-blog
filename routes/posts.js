const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

// GET 所有用户或者特定用户的文章
router.get('/', (req, res) => {
  res.send(req.flash())
})

// POST 发表一篇文章
router.post('/', checkLogin, (req, res) => {
  res.send(req.flash())
})

// GET 发表文章页
router.get('/create', checkLogin, (req, res) => {
  res.send(req.flash())
})

// GET 单独一篇的文章页
router.get('/:postid', (req, res) => {
  res.send(req.flash())
})

// GET 更新文章页
router.get('/:postid/edit', checkLogin, (req, res) => {
  res.send(req.flash())
})

// POST 更新一篇文章
router.post('/:postid/edit', checkLogin, (req, res) => {
  res.send(req.flash())
})

// GET 删除一篇文章
router.get('/:postid/remove', checkLogin, (req, res) => {
  res.send(req.flash())
})

// POST  创建一条留言
router.get('/:postid/comment', checkLogin, (req, res) => {
  res.send(req.flash())
})

// GET 删除一条留言
router.get('/:postid/comment/:commentid/remove', checkLogin, (req, res) => {
  res.send(req.flash())
})

module.exports = router
