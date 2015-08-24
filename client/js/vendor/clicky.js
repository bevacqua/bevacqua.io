var tag = 'script'
var property = '100871565'

global.clicky_site_ids = [property];
global.clicky_custom = { timer: 0 };

loadScript('//static.getclicky.com/js')

function loadScript (url) {
  var first = document.getElementsByTagName(tag)[0]
  var script = document.createElement(tag)
  script.async = true
  script.src = url
  first.parentNode.insertBefore(script, first)
  return script
}
