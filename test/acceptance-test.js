var chai = require("chai")
var chaiHttp = require('chai-http')
var app = require('./server')
Promise = require('es6-promise').Promise;

chai.use(chaiHttp)

describe("Acceptance test", function () {
  var router = ''

  beforeEach("Create new instace", function () {
    this.router = require('../index.js')
    this.router.use(app)
  })

  it("Binds a new resource to the app", function () {
    this.router.resource('/test', require('./controller/testController.js'))
  })

  it("Shoud return a json respose on the index resource", function (done) {
    chai.request(app)
    .get('/test')
    .then(function (res) {
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.json;
      chai.expect(res.body.succes).to.be.equal(true);
      chai.expect(res.body.name).to.be.equal('index');
      done()
    }).catch(function (err) {
      done(new Error(err))
    });
  })

  it("Shoud return a json respose on the store resource", function (done) {
    chai.request(app)
    .post('/test')
    .then(function (res) {
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.json;
      chai.expect(res.body.succes).to.be.equal(true);
      chai.expect(res.body.name).to.be.equal('store');
      done()
    }).catch(function (err) {
      done(new Error(err))
    });
  })

  it("Shoud return a json respose on the show resource", function (done) {
    chai.request(app)
    .get('/test/1')
    .then(function (res) {
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.json;
      chai.expect(res.body.succes).to.be.equal(true);
      chai.expect(res.body.id).to.be.equal('1');
      chai.expect(res.body.name).to.be.equal('show');
      done()
    }).catch(function (err) {
      done(new Error(err))
    });
  })

  it("Shoud return a json respose on the update resource", function (done) {
    chai.request(app)
    .put('/test/1')
    .then(function (res) {
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.json;
      chai.expect(res.body.succes).to.be.equal(true);
      chai.expect(res.body.id).to.be.equal('1');
      chai.expect(res.body.name).to.be.equal('update');
      done()
    }).catch(function(err) {
      done(new Error(err))
    });
  })

  it("Shoud return a json respose on the destroy resource", function (done) {
    chai.request(app)
    .delete('/test/1')
    .then(function (res) {
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.json;
      chai.expect(res.body.succes).to.be.equal(true);
      chai.expect(res.body.id).to.be.equal('1');
      chai.expect(res.body.name).to.be.equal('destroy');
      done()
    }).catch(function(err) {
      done(new Error(err))
    });
  })
})

