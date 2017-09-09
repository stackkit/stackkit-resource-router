var express = require('express')
var chai = require("chai")
var chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("Acceptance test", function () {
  var app = ''
  var router = ''

  beforeEach("Create new instace", function () {
    app = express()
    router = require('../index.js')
    router.use(app)

    app.listen(3000)
  })

  it("Binds a new resource to the app", function () {
    router.resource('/test', require('./controller/testController.js'))
  })

  it("Shoud return a json respose on the index resource", () => {
    chai.request(app)
    .get('/test')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
    });
  })

  it("Shoud return a json respose on the store resource", function () {
    chai.request(app)
    .post('/test')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
    });
  })

  it("Shoud return a json respose on the show resource", function () {
    chai.request(app)
    .get('/test/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
      expect(res.body.id).to.be.equal(1);
    });
  })

  it("Shoud return a json respose on the update resource", function () {
    chai.request(app)
    .put('/test/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
      expect(res.body.id).to.be.equal(1);
    });
  })

  it("Shoud return a json respose on the destroy resource", function () {
    chai.request(app)
    .delete('/test/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
      expect(res.body.id).to.be.equal(1);
    });
  })
})

