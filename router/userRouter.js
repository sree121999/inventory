const express=require('express')
const {getallitems,additem,deleteitem} = require('../controller/usercontroller')
const router=express.Router()



router.get('/allitems',getallitems
    
)

router.post('/additem',additem)

router.delete('/deleteitem:id',deleteitem)

module.exports=router

