const express = require('express')

const router = express.Router()

const db = require('../../data/dbConfig')
const { authenticate } = require('../../auth/authenticate');
const { checkRole } = require('../../auth/checkRole');


router.use(express.json())
router.get('/', authenticate, (req,res)=>{
  db('trips').then(trips=>{res.status(200).json(trips)}).catch(err=>res.status(404).json({message:"No trips found!"}))

})
router.get('/:id',authenticate, (req,res)=>{
  const id = req.params.id
  db('trips').where('id', id).then(trips=>{res.status(200).json(trips)}).catch(err=>res.status(404).json({message:"No trip with that id found!"}))
})
router.get('/byGuide/:id',authenticate, (req,res)=>{
  const id = req.params.id
  db('trips').where('user_id', id).then(trips=>{res.status(200).json(trips)}).catch(err=>res.status(404).json({message:"No trips found for that guide"}))
})
router.put('/:id', authenticate, checkRole,(req,res)=>{
  const id = req.params.id
  db('trips')
    .where('id', id)
    .update({
      location: req.body.location,
      quantity: req.body.quantity,
      units: req.body.units,
      trip_type: req.body.trip_type,
      service_type: req.body.service_type,
    })
    .then(numUpdated=>{
      if(numUpdated!=0){
        res.status(201).json({message:"Updated trip information"})
      }else{
        res.status(404).json({message:"No trip with that id found"})
      }
    })
    .catch(err=>{
      res.status(500).json({message:"Internal server error"})
    })

})

router.post('/', authenticate,checkRole,(req,res)=>{
  const trip = req.body
  console.log('in post trips')
  db('trips').insert(trip).then(
    (trips)=>{

      res.status(201).json({message:'Trip added successfully!'})
}).catch(err=>{res.status(500).send(err)})
})

router.delete('/:id', authenticate,checkRole, (req,res)=>{
  const id = req.params.id
  db('trips')
    .where('id', id)
    .del()
    .then(numDeleted=>{
      if(numDeleted !=0){
        res.status(201).json({message:"Deleted trip"})
      }else{
        res.status(401).json({message:"No trip with that id found!"})
      }
    })
    .catch(err=>{
      res.status(500).json({message:"Internal server error"})
    }
    )

})

module.exports = router
