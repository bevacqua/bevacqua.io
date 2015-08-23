import links from '../../dat/buildfirst/links.json'
import megamark from 'megamark'

var resources = Object.keys(links).map(key => {
  var item = links[key]
  if (item.description) {
    item.description = megamark(item.description)
  }
  item.key = key
  return item
})

export default function (req, res, next) {
  req.model = {
    resources: resources
  }
  next()
}
