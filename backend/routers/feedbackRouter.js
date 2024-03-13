const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel')

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const {name,email,rating,message} = req.body
    await new Feedback(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.delete('/delete/:id',async (req,res)=>{
    console.log(req.params.id);
    await Feedback.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

router.get('/all',async (req,res)=>{
    await Feedback.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})

// router.get('/one/:id',(req,res)=>{
//     Feedback.findById(req.params.id)
//     .then((result) => {
//         res.json(result);
//     }).catch((err) => {
//         console.error(err);
//         res.json(err);
//     });
// })

// router.put('/update/:id',(req,res)=>{
//     Feedback.findByIdAndUpdate
//     (req.params.id,req.body,{new:true})
//     .then((result) => {
//         res.json(result);
//     }).catch((err) => {
//         console.error(err);
//         res.json(err);
//     });
// })

// limited feedbacks
router.get('/limited',async (req,res)=>{
    await Feedback.find().limit(5).sort({createdAt:-1})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
module.exports = router