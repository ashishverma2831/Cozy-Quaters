const express = require('express');
const router = express.Router();
const AddRoom = require('../models/addRoomModel.js')

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

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    AddRoom.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/all',(req,res)=>{
    AddRoom.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.get('/limited',(req,res)=>{
    AddRoom.find().limit(10).sort({createdAt:-1})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

module.exports = router