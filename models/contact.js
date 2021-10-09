const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number
    }
});
const Contact = mongoose.model("contact",contactSchema)
module.exports = Contact;