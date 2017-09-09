var application = ''
var resoureces = ['index', 'store', 'show', 'update', 'destroy']
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
    resoureces.forEach(function(resource){
      if (controller.hasOwnProperty(resource)) {
        this.application.route(this.routeUriTransformer(url, resource))[http[resource]](controller[resource])
      }
    }.bind(this))
  },
  routeUriTransformer: function(url, resource) {
    var resoureces = ['show', 'update', 'destroy']

    if (resoureces.indexOf(resource) === -1) {
      return url
    }

    return url + '/:id'
  }
}

module.exports = resourceRouter
