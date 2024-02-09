const express = require('express');
const router = express.Router();
const Model = require('../models/userModel.js')
// const bcryptjs = require('bcryptjs');

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,email,password,confirm} = req.body
    // const hashedPassword = bcryptjs.hashSync(password,10);
    // const hashedConfirmPassword = bcryptjs.hashSync(confirm,10);
    
    // new Model({name,email,password:hashedPassword,confirm:hashedPassword}).save()
    new Model({name,email,password,confirm}).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

router.post('/authenticate',(req,res)=>{
    console.log(req.body);
    // const {email,password} = req.body;
    // const hashedPassword = bcryptjs.hashSync(password,10);
    // console.log(hashedPassword);
    Model.findOne(req.body)
    // Model.findOne({email,password:hashedPassword})
    .then((result) => {
        if(result)
            res.json(result);
        else 
            res.status(401).json({message:'Invalid Credentials'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/cities/:city',(req,res)=>{
    console.log(req.params.address);
    Model.find({address:req.params.city})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/all',(req,res)=>{
    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id',(req,res)=>{
    console.log(req.body);
    Model.findByIdAndDelete(req.params.id,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbyid/:id',(req,res)=>{
    console.log("hello "+req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put('/update/:id',(req,res)=>{
    console.log(req.params.id);
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router 