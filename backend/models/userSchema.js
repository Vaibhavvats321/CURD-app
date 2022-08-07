const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
            type:String,
            required:true
    },
    phn_no:{
        type:Number,
        required:true,
        unique:true
    },
    add: {
         type:String,
    required:true
    },
    work:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});

const users = new mongoose.model("users",userSchema);

module.exports = users;
