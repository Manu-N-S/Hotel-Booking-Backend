const mongoose = require("mongoose");

var mongoDBURL = `mongodb+srv://manu:manu123@cluster0.vqd0qlo.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose