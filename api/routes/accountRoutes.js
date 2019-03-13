const axios = require('axios')
const bcrypt = require('bcryptjs')
const knex = require('knex')
const db = require('../../data/dbConfig')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET ||     'add a .env file to root of project with the JWT_SECRET variable';

const express = require('express')
const router = express.Router()

const { authenticate } = require('../../auth/authenticate');
const { checkRole } = require('../../auth/checkRole');
const { checkAdmin } = require('../../auth/checkAdmin');
router.use(express.json())


router.post('/register', register);
router.post('/login', login);



router.get('/',  (req,res)=>{
  db('users').where('role', 'tourist').then(users=>{res.status(200).json(users)}).catch(err=>{res.status(404).json({err:"No users found!"})})
})
router.get('/guides/',  (req,res)=>{
  console.log('in guides')
  db('users').where('role', 'guide').then(users=>{res.status(200).json(users)}).catch(err=>{res.status(404).json({err:"No users found!"})})
})

router.get('/:id',  (req,res)=>{
  const id = req.params.id
  db('users').where('id', id).where('role', 'tourist').first().then(users=>{res.status(200).json(users)}).catch(err=>{res.status(500).json({err:"Error trying to GET user!"})})
})


router.get('/guides/:id',  (req,res)=>{
  const id = req.params.id
  db('users').where('id', id).where('role', 'guide').first().then(users=>{res.status(200).json(users)}).catch(err=>{res.status(500).json({err:"Error trying to GET user!"})})
})

///
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
    })
})

module.exports = router
function generateToken(user){
  console.log('in generatetoken')
  console.log(user[0])
  const payload = {
    username:user[0].username,
    role:user[0].role
  }
  console.log('payload')
  console.log(payload)
  const options = {
    expiresIn: '1h',
    jwtid:'12345'
  }
  return jwt.sign(payload,secret,options)
}

function register(req, res) {
  const credentials = req.body
  const hash = bcrypt.hashSync(credentials.password, 14)
  credentials.password = hash
  db('users').where('username',credentials.username).then(user=>{
    console.log('user found')
    console.log(user)
    console.log(credentials)
    if(user.length !=0 && user[0].username === credentials.username){
      res.send({message:"That user already exists!"})
    }else{db('users').insert(credentials).then(
      (ids)=>{
        db('users').where('id',ids[0]).then(user=>{
          const token = generateToken(user)
          console.log(user)
          console.log(token)
          const userData = user[0]
          db('profiles').insert(
            {
              username:userData.username,
              name: userData.name,
              role:userData.role,
              email:userData.email,
              phone:userData.phone,
              user_id: userData.id
            })
            .then(user=>{res.status(201).json({id:userData.id, role:userData.role, token})})
            .catch(err=>{res.status(500).json({error:"Error inserting into profiles"})})
      }).catch(err=>{res.status(500).send(err)})
  }).catch(err=>{res.status(401).json({error:err.message})})}
}).catch(err=>{res.status(500).json({err:err.message})})
}

function login(req, res) {
  const credentials = req.body
  db('users').where('username', credentials.username).then(user=>{
    console.log('in login')
    console.log('user')
    console.log(user[0].role)
    if(!user || !bcrypt.compareSync(credentials.password, user[0].password)){
      res.status(401).json({error:'incorrect credentials, access denied'})
    }else{

      const token = generateToken(user)
      res.status(200).json({role:user[0].role, id:user[0].id,token})
    }

  }).catch(err=>res.status(500).json({err:err.message}))
}
