const express = require('express')

const router = express.Router()
const db = require('../../data/dbConfig')
const { authenticate } = require('../../auth/authenticate');
const { checkRole } = require('../../auth/checkRole');
const { checkAdmin } = require('../../auth/checkAdmin');

router.use(express.json())

router.get('/', authenticate, checkAdmin, (req,res)=>{
  db('users').where('role', 'tourist').then(users=>{res.status(200).json(users)}).catch(err=>{res.status(404).json({err:"No users found!"})})


})

router.get('/guides/', authenticate, checkAdmin, (req,res)=>{
  console.log('in guides')
  db('users').where('role', 'guide').then(users=>{res.status(200).json(users)}).catch(err=>{res.status(404).json({err:"No users found!"})})


})

router.get('/:id', authenticate, (req,res)=>{
  const id = req.params.id
  db('users').where('id', id).where('role', 'tourist').first().then(users=>{res.status(200).json(users)}).catch(err=>{res.status(500).json({err:"Error trying to GET user!"})})
})



router.get('/guides/:id', authenticate,(req,res)=>{
  const id = req.params.id
  db('users').where('id', id).where('role', 'guide').first().then(users=>{res.status(200).json(users)}).catch(err=>{res.status(500).json({err:"Error trying to GET user!"})})
})


router.put('/:id', (req,res)=>{
  console.log('in put')
  console.log(req.body)
  const id = req.params.id

  db('users')
    .where('id', id)
    .update({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      phone: req.body.phone
    })
    .then(numUpdated=>{
      if(numUpdated!=0){
        res.status(201).json({message: `You changed your information`})
      }else{
        res.status(404).json({message: 'No record found!'})
      }
    })
    .catch(err=>{res.status(500).json({err:'Internal server error'})})
})

router.delete('/:id', (req,res)=>{
  const id = req.params.id
  db('users')
    .where('id', id)
    .del()
    .then(numDeleted=>{
      if(numDeleted!=0){
        res.status(201).json({message:"User deleted"})
      }else{
        res.status(404).json({message:"No record found!"})
      }
    })
    .catch(err=>{
      res.status(500).json({message:"Internal server error"})
    }
    )

})

module.exports = router
