const {Schema,model} = require('mongoose');

const requestSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
},
{
    timestamps:true //this will automatically add the created at and updated at field
}
);

module.exports = model('request',requestSchema);