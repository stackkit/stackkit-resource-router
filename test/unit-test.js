const express = require('express')
const expect = require("chai").expect

describe("Unit test", () => {
  let app = ''
  let router = ''

  beforeEach("Create new instace", () => {
    app = express()
    router = require('../index.js')
    router.use(app)
  })

  it("Instantiate a new instance of the package", () => {
    expect(router.application).to.be.equal(app)
  })

  it("Binds a id after the uri when the resource is show, update or destroy", () => {
    const url = '/test'
    const resources = ['show', 'update', 'destroy']

    resources.forEach(resource => {
      const uri = router.routeUriTransformer(url, resource)
      expect(uri).to.equal('/test/:id')
    })
  })

  it("Binds no id after the uri when the resource is index or store", () => {
    const url = '/test'
    const resources = ['index', 'store']

    resources.forEach(resource => {
      const uri = router.routeUriTransformer(url, resource)
      expect(uri).to.equal('/test')
    })
  })

  it("Binds a new resource to the app", () => {
    router.resource('/test', require('./controller/testController.js'))
  })
})

//Start acceptance-test
require('./acceptance-test')

