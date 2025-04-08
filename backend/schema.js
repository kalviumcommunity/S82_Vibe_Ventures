const mongoose = require('mongoose')

const objectschema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    dob:{type:Number},
    address:{type:Number},
    message:{type:String},
    fatherName:{type:String},
    motherName:{type:String},
    noofsiblings:{type:Number},
    date:{type:Date},

    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})
module.exports = mongoose.model("object",objectschema)