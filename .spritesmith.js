var util = require('util');

module.exports = [{
  src: './client/img/sprite/icons/*.{png,gif,jpg}',
  destImage: '.bin/public/img/icons.png',
  destCSS: 'client/css/generated/icons.css',
  imgPath: '/img/icons.png',
  padding: 2,
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name)
    }
  }
}, {
  src: './client/img/sprite/buildfirst-resources/*.{png,gif,jpg}',
  destImage: '.bin/public/img/buildfirst-resources.png',
  destCSS: 'client/css/generated/buildfirst-resources.css',
  imgPath: '/img/buildfirst-resources.png',
  padding: 2,
  cssOpts: {
    cssClass: function (item) {
      return util.format('.bfr-%s:before', item.name)
    }
  }
}]
