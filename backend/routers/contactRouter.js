const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel')

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const {name,subject,message} = req.body
    await new Contact(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.delete('/delete/:id',async (req,res)=>{
    console.log(req.params.id);
    await Contact.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/all',async (req,res)=>{
    await Contact.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

module.exports = router