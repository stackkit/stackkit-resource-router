var application = ''
var resources = ['index', 'store', 'show', 'update', 'destroy']
var http = {
  'index': 'get',
  'store': 'post',
  'show': 'get',
  'update': 'put',
  'destroy': 'delete'
}

var resourceRouter = {
  use: function (app) {
    this.application = app
  },
  resource: function (url, controller) {
    resources.forEach(function(resource){
      if (controller.hasOwnProperty(resource)) {
        this.application.route(this.routeUriTransformer(url, resource))[http[resource]](controller[resource])
      }
    }.bind(this))
  },
  routeUriTransformer: function(url, resource) {
    var resources = ['show', 'update', 'destroy']

    if (resources.indexOf(resource) === -1) {
      return url
    }

    return url + '/:id'
  }
}

module.exports = resourceRouter
