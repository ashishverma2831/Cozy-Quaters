const {Schema,model} = require('mongoose');

const feedbackSchema = new Schema({   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    } 
});

module.exports = model('feedback',feedbackSchema);