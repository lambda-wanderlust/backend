const express = require('express')
const apiRoutes = require('./api/apiRoutes')
const server = express()
const cors = require('cors')

server.use(cors())
server.get('/', (req,res)=>{res.status(200).send("Here is the server")})
server.use('/api', apiRoutes)
server.listen((process.env.PORT || 3000),()=>{console.log('API running on port')})
