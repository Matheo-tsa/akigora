const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    email : {type : String , Required : true},
    phone : {type:String, required:true},
    password : {type : String, required : true},
    civility : {type: String, required :true},
    firstName : {type:String, required : true},
    lastName : {type : String, required:true},
    howWeMet : {type:String, required : false},
    mailing : {type : Boolean, required: false},
    validateEmail : {type : Boolean, required: false},
    picture : {type : String, required : false},
    birthDate : {type : String, required : true},
    nationality : {type:String, required : true},
    countryOfResidence : {type : String, required : true},
});

module.exports = mongoose.model('User', UserModel)