const express = require('express');
const router = express.Router();
const Request = require('../models/requestModel.js')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,number} = req.body
    new Request({name,number}).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

module.exports = router