# stackkit-resource-router
stackkit resource router for express

## Installation

Using npm
```shell
npm install stackkit-resource-router
```

In nodejs
```js
const express = require('express')
const app = Express()

const router = require('stackkit-resource-router')

router.use(app)
router.resource('/test', testController)

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
