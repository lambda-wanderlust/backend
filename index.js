const express = require('express')

const apiRoutes = require('./api/apiRoutes')

const server = express()


server.get('/', apiRoutes)


server.listen((process.env.PORT || 3000),()=>{console.log('API running on port')})
