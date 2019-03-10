const express = require('express')

const apiRoutes = require('./api/apiRoutes')

const server = express()

server.use('/api', apiRoutes)

server.get('/', (req,res)=>{
  res.status(200).send("Here's server")
})

server.listen((process.env.PORT || 3000),()=>{console.log('API running on port')})
