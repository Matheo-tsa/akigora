const mongoose = require('mongoose');

const AnnonceModel = mongoose.Schema({
    name: {type: String, required: true},
    creatorId: {type: String, required: true},
    remuneration: {type: Number, required: true},
    dateStart: {type: Date, required: false},
    syllabus: {type: String, required: false},
    objectif: {type: String, required: false},
    dateEnd: {type: Date, required: true},
    place: {type: String, required: true},
    detail: {type: String, required: false},
    annexeMissions: {type: String, required: false},
    foreignLangage: {type: String, required: false},
    replaceAbsent: {type: Boolean, required: false},
    nbrHours: {type: Number, required: true},
    apprenants : {type: String, required: true},
    searchProfile : {type: String, required: true},
    freeField : {type:String, required:true}
});

module.exports = mongoose.model('Annonce', AnnonceModel)