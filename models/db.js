const mongoose = require('mongoose');
mongoose.connect('your mongoose database link ',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) {console.log("MongoDB Connected Succesful");}
    else
    console.log("Problem occur"+err);
})
require('./employee.model');