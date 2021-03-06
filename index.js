const express = require('express')
const apiRoutes = require('./api/apiRoutes')
const server = express()
server.get('/', (req,res)=>{res.status(200).send("Here is the server")})
server.use('/api', apiRoutes)
server.use('/uploads', express.static(__dirname + '/public'))

server.listen((process.env.PORT || 3000),()=>{console.log('API running on port')})
