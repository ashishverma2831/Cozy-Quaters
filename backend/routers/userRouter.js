const express = require('express');
const router = express.Router();
const Model = require('../models/userModel.js');
const { Query } = require('mongoose');
// const bcryptjs = require('bcryptjs');

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const {name,email,password,confirm} = req.body
    // const hashedPassword = bcryptjs.hashSync(password,10);
    // const hashedConfirmPassword = bcryptjs.hashSync(confirm,10);
    
    // new Model({name,email,password:hashedPassword,confirm:hashedPassword}).save()
    await new Model({name,email,password,confirm}).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
})

router.post('/authenticate', async (req,res)=>{
    console.log(req.body);
    // const {email,password} = req.body;
    // const hashedPassword = bcryptjs.hashSync(password,10);
    // console.log(hashedPassword);
    await Model.findOne(req.body)
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

// router.get('/cities/:city',(req,res)=>{
//     console.log(req.params.address);
//     Model.find({address:req.params.city})
//     .then((result) => {
//         res.json(result);
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

router.get('/all',async (req,res)=>{
    await Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id',async (req,res)=>{
    console.log(req.body);
    await Model.findByIdAndDelete(req.params.id,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbyid/:id',async (req,res)=>{
    console.log("hello "+req.params.id);
    await Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put('/update/:id',async (req,res)=>{
    console.log(req.params.id);
    await Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/forget-password',async (req,res)=>{
    console.log(req.body);
    const {email} = req.body;
    console.log(email);
    await Model.findOne({
        email:email
    })
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

router.put('/reset-password/:id',async (req,res)=>{
    console.log(req.params.id);
    await Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router 