const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,email,rating,message} = req.body
    new Feedback(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    Feedback.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.get('/all',(req,res)=>{
    Feedback.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

module.exports = router