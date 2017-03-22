const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const checkLogin = require('../middlewares/check').checkLogin
const postServer = require('../models/post.server')

// GET 所有用户或者特定用户的文章
router.get('/', (req, res) => {
  postServer.find({}, null, { limit: 10 }, (err, result) => {
    res.render('posts', {
      posts: result
    })
  })
})

// POST 发表一篇文章
router.post('/', checkLogin, (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    const post = {
      user: req.session.user,
      tit: fields.tit,
      content: fields.content
    }
    postServer.create(post, (err, result) => {
      if (err) return
      req.flash('success', '发帖成功')
      res.redirect('/posts')
    })
  })
})

// GET 发表文章页
router.get('/create', checkLogin, (req, res) => {
  res.redirect('/')
})

// GET 单独一篇的文章页
router.get('/:postid', (req, res) => {
  res.render('post')
})

// GET 更新文章页
router.get('/:postid/edit', checkLogin, (req, res) => {
  res.render('post')
})

// POST 更新一篇文章
router.post('/:postid/edit', checkLogin, (req, res) => {

})

// GET 删除一篇文章
router.get('/:postid/remove', checkLogin, (req, res) => {

})

// POST  创建一条留言
router.get('/:postid/comment', checkLogin, (req, res) => {

})

// GET 删除一条留言
router.get('/:postid/comment/:commentid/remove', checkLogin, (req, res) => {

})

module.exports = router
