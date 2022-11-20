const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

var Empolyee1 =mongoose.model('Employee',employeeSchema);
module.exports = Empolyee1;