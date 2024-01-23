const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    confirm:{
        type:String,
        required:true
    }   
});

module.exports = model('user',userSchema);