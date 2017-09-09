const express = require('express')
const chai = require("chai")
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("Acceptance test", () => {
  let app = ''
  let router = ''

  beforeEach("Create new instace", () => {
    app = express()
    router = require('../index.js')
    router.use(app)

    app.listen(3000)
  })

  it("Binds a new resource to the app", () => {
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

  it("Shoud return a json respose on the store resource", () => {
    chai.request(app)
    .post('/test')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
    });
  })

  it("Shoud return a json respose on the show resource", () => {
    chai.request(app)
    .get('/test/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
      expect(res.body.id).to.be.equal(1);
    });
  })

  it("Shoud return a json respose on the update resource", () => {
    chai.request(app)
    .put('/test/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.succes).to.be.equal(true);
      expect(res.body.id).to.be.equal(1);
    });
  })

  it("Shoud return a json respose on the destroy resource", () => {
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

