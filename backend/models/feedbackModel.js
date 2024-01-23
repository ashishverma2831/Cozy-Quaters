const {Schema,model} = require('../connection');

const feedbackSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }    
});

module.exports = model('feedback',feedbackSchema);