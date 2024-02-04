const express = require('express');
const router = express.Router();
const AddRoom = require('../models/addRoomModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,email,number,accomodation,suitable,amount,roomname,image,description,address} = req.body
    new AddRoom(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

module.exports = router