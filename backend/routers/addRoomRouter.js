const express = require('express');
const router = express.Router();
const AddRoom = require('../models/addRoomModel.js')

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const {name,email,number,accomodation,suitable,amount,roomname,image,description,address} = req.body
    await new AddRoom(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.delete('/delete/:id',async (req,res)=>{
    console.log(req.params.id);
    await AddRoom.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/all',async (req,res)=>{
    await AddRoom.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.get('/limited',async (req,res)=>{
    await AddRoom.find().limit(10).sort({createdAt:-1})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

module.exports = router