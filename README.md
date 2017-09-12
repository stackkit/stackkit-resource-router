[![Build Status](https://travis-ci.org/stackkit/stackkit-resource-router.svg?branch=master)](https://travis-ci.org/stackkit/stackkit-resource-router)

# stackkit-resource-router
A resource router for express. This package will automatically create all the routes for a restful application.

## Installation

Using npm
```shell
npm install stackkit-resource-router
```

In nodejs
```js
const express = require('express')
const app = express()

const router = require('stackkit-resource-router')

router.use(app)
router.resource('/test', require('./testController'))

app.listen(3000)
```

## Example controller
```js
exports.index = function(req, res){
  res.send('test index');
};

exports.store = function(req, res){
  res.send('test server');
};

exports.show = function(req, res){
  res.send('show test ' + req.params.id);
};

exports.update = function(req, res){
  res.send('update test ' + req.params.id);
};

exports.destroy = function(req, res){
  res.send('destroy test ' + req.params.id);
};
```
