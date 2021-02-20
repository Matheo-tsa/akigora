const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    email : {type : String , Required : true},

});

module.exports = mongoose.model('User', UserModel)