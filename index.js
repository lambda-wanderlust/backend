const express = require('express')

const apiRoutes = require('./api/apiRoutes')

const server = express()

server.get('/', ()=>{console.log('server is here')})

server.use('/api', apiRoutes)


server.listen((process.env.PORT || 3000),()=>{console.log('API running on port')})
