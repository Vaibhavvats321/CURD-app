const mongoose = require('mongoose');

const DB = "mongodb+srv://admin:harsh@cluster0.s30gy.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.connect(DB,{
    // userCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));