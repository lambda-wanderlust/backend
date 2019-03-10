const axios = require('axios');
const bcrypt = require('bcryptjs')
const knex = require('knex')
const db = require('../database/dbConfig')
const jwt = require('jsonwebtoken')
const { authenticate } = require('../auth/authenticate');
const { checkrole } = require('../auth/checkRole')
const secret = 'add a .env file to root of project with the JWT_SECRET variable'


module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
};

function generateToken(user){
  const payload = {
    username:user.username,
    role:user.role
  }
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
  db('users').insert(credentials).then(
    (ids)=>{
      db('users').where('id',ids[0]).then(user=>{
        const token = generateToken(user)
        console.log(user)
        console.log(token)
        res.status(201).json({token})

      })
      console.log(ids[0])
    }

  ).catch(err=>{res.status(500).send(err)})

}

function login(req, res) {
  const credentials = req.body
  db('users').where('username', credentials.username).then(user=>{

    if(!user || !bcrypt.compareSync(credentials.password, user[0].password)){
      res.status(401).json({error:'incorrect credentials, access denied'})
    }else{

      const token = generateToken(user)
      res.status(200).json({token})
    }

  }).catch(err=>res.status(500).json({err:err.message}))
}

function checkRole(role){
  return function(req,res,next){
    if(req.decodedJwt.roles && req.decodedJwt.role===role){
      next();
    }else{
      res.status(400).json({message:"You don't have access to this route!"})
    }
  }
}
