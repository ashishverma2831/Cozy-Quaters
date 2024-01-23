const {Schema,model} = require('../connection');

const contactSchema = new Schema({
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

module.exports = model('contact',contactSchema);