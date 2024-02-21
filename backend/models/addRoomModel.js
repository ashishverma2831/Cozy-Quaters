const {Schema,model} = require('mongoose');

const addRoomSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    accomodation:{
        type:String,
        required:true,
    },
    suitable:{
        type:String,
        required:true,
    },
    amount:{
        type:String,
        required:true,
    },
    roomname:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
},{timestamps:true});

module.exports = model('addroom',addRoomSchema);
