const express = require('express')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')
const tripRoutes = require('./routes/tripRoutes')
const accountRoutes = require('./routes/accountRoutes')

const router = express.Router()
router.use(cors())

router.use('/users', userRoutes)
router.use('/trips', tripRoutes)
router.use('/accounts', accountRoutes)

module.exports = router
