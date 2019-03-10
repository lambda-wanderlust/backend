const express = require('express')

const apiRoutes = require('./api/apiRoutes')
//const userRoutes = require('./api/routes/userRoutes')
//const tripRoutes = require('./api/routes/tripRoutes')
const server = express()

server.use('/api', apiRoutes)

server.listen(3000,()=>{console.log('API running on port 3000')})
