const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,subject,message} = req.body
    new Contact(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.get('/all',(req,res)=>{
    Contact.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

module.exports = router