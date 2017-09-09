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
