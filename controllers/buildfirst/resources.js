import links from '../../dat/buildfirst/links.json'

export default function (req, res, next) {
  req.model = {
    resources: Object.keys(links).map(key => {
      return links[key].key = key, links[key]
    })
  }
  next()
}
