const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
})

module.exports = Model