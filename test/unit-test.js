var express = require('express')
var expect = require("chai").expect

describe("Unit test", function () {
  var app = ''
  var router = ''

  beforeEach("Create new instace", function () {
    app = express()
    router = require('../index.js')
    router.use(app)
  })

  it("Instantiate a new instance of the package", function () {
    expect(router.application).to.be.equal(app)
  })

  it("Binds a id after the uri when the resource is show, update or destroy", function () {
    var url = '/test'
    var resources = ['show', 'update', 'destroy']

    resources.forEach(function (resource) {
      var uri = router.routeUriTransformer(url, resource)
      expect(uri).to.equal('/test/:id')
    })
  })

  it("Binds no id after the uri when the resource is index or store", function () {
    var url = '/test'
    var resources = ['index', 'store']

    resources.forEach(function (resource) {
      var uri = router.routeUriTransformer(url, resource)
      expect(uri).to.equal('/test')
    })
  })

  it("Binds a new resource to the app", function () {
    router.resource('/test', require('./controller/testController.js'))
  })
})

//Start acceptance-test
require('./acceptance-test')

