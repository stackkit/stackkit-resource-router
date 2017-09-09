const application = ''
const resoureces = ['index', 'store', 'show', 'update', 'destroy']
const http = {
  'index': 'get',
  'store': 'post',
  'show': 'get',
  'update': 'put',
  'destroy': 'delete'
}

const resourceRouter = {
  use: function (app) {
    this.application = app
  },
  resource: function (url, controller) {
    resoureces.forEach(resource => {
      if (controller.hasOwnProperty(resource)) {
        this.application.route(this.routeUriTransformer(url, resource))[http[resource]](controller[resource])
      }
    })
  },
  routeUriTransformer: function(url, resource) {
    return ['show', 'update', 'destroy'].includes(resource) ? url + '/:id' : url;
  }
}

module.exports = resourceRouter
