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
    console.log(req.params.city);
    Model.find({city:req.params.city})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router 