import Annonce from "../Model/Annonce";

exports.postAnnonce = (req, res) => {
  const {
    name,
    creatorId,
    remuneration,
    dateStart,
    syllabus,
    objectif,
    dateEnd,
    place,
    detail,
    annexeMissions,
    foreignLangage,
    replaceAbsent,
    nbrHours,
    apprenants,
    searchProfile,
    freeField,
  } = req.body;
  const newAnnonce = new Annonce({
    name: name,
    creatorId: req.user,
    remuneration: remuneration,
    dateStart: dateStart,
    syllabus: syllabus,
    objectif: objectif,
    dateEnd: dateEnd,
    place: place,
    detail: detail,
    annexeMissions: annexeMissions,
    foreignLangage: foreignLangage,
    replaceAbsent: replaceAbsent,
    nbrHours: nbrHours,
    apprenants: apprenants,
    searchProfile: searchProfile,
    freeField: freeField,
  });
  newAnnonce.save().then(() => {res.render("annonces", {message : "votre annonce à été postée avec succès"})})
};
