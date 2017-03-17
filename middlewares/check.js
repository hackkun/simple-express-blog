// 检查未登录
exports.checkLogin = (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', '未登录')
    res.redirect('/signin')
  }
  next()
}

// 检查已登录
exports.checkNotLogin = (req, res, next) => {
  if (req.session.user) {
    req.flash('error', '已登录')
    res.redirect('back')
  }
  next()
}