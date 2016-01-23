var links = require('./dat/buildfirst-links.json')

function expand (req, res, next) {
  var key = req.params.key
  var link = links[key]
  if (link){
    to(link.url)(req, res, next)
    return
  }
  next()
}

function to (url, status) {
  return function (req, res) { res.status(status || 302).redirect(url) }
}

module.exports = function (app) {
  app.get('/consulting', to('mailto:consulting@bevacqua.io'))
  app.get('/blog', to('https://ponyfoo.com'))
  app.get('/career', to('http://careers.stackoverflow.com/bevacqua'))
  app.get('/code', to('https://github.com/bevacqua'))
  app.get('/github', to('https://github.com/bevacqua'))
  app.get('/stackoverflow', to('http://stackoverflow.com/users/389745/nico'))
  app.get('/twitter', to('https://twitter.com/nzgb'))

  app.get('/bf', to('https://ponyfoo.com/bf', 301))
  app.get('/bf/resources', to('https://ponyfoo.com/bf', 301))
  app.get('/bf/:key(*)', expand, to('https://ponyfoo.com/bf', 301))

  app.get('/', to('https://ponyfoo.com/about', 301))
  app.get('/about', to('https://ponyfoo.com/about', 301))
  app.get('/opensource', to('https://ponyfoo.com/opensource', 301))
  app.get('/talks', to('https://ponyfoo.com/speaking', 301))
  app.get('/buildfirst', to('https://ponyfoo.com/bf', 301))
  app.get('/buildfirst/resources', to('https://ponyfoo.com/bf', 301))
}
