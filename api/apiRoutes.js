const express = require('express')

const userRoutes = require('./routes/userRoutes')
const tripRoutes = require('./routes/tripRoutes')
const accountRoutes = require('./routes/accountRoutes')

const router = express.Router()

router.use('/', ()=>{
  res.status(200).send("Here's the server")
})
router.use('/users', userRoutes)
router.use('/trips', tripRoutes)
router.use('/accounts', accountRoutes)
module.exports = router;
