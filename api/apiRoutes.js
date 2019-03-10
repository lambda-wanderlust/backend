const express = require('express')

const userRoutes = require('./routes/userRoutes')
const tripRoutes = require('./routes/tripRoutes')
const accountRoutes = require('./routes/accountRoutes')

const router = express.Router()

router.get('/', ()=>{console.log('server is here')})
router.use('/api/users', userRoutes)
router.use('/api/trips', tripRoutes)
router.use('/api/accounts', accountRoutes)

module.exports = router;
