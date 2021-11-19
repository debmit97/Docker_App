const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const port = 80

const token = require('./token/')
app.use('/api/v1/aiapi', token)
app.use('/*', createProxyMiddleware({ target: 'https://reqres.in/api/users', changeOrigin: true }))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
