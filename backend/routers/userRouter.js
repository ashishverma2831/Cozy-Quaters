const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,email,password,confirm} = req.body
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
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

module.exports = router