require.paths.unshift("vendor/lib")

// require express and others to make sure
//require("express")
require("connect")
//require("jade")
//require("sass")

//require the actual express app
require ("./lib/app")

var http = require('http'),
    port = process.env.PORT || 8001

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World 2\n')
}).listen(parseInt(port))