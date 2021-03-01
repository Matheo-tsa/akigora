import mongoose from 'mongoose';

const ProfileModel = mongoose.Schema({
    type : String,
    userId : String,
    timestamps : {createdAt : 'created_at', updatedAt:'updated_at'},
    temporaryInvisible: Boolean,
    domains:String,
    title: String,
    location: String,
    descripton:String,
    mission:String,
    mainSkills:String,
    languages:String,
    tools:String,
    experiences:


})