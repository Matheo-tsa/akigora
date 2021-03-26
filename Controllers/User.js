const bcrypt = require("bcrypt");
const User = require("../Model/User");
const Profile = require("../Model/Profile");
const passport = require('passport')
exports.register = (req, res) => {
  const {
    email,
    phoneNumber,
    password,
    firstName,
    lastName,
    birthDate,
    nationality,
    residence,
    civility,
  } = req.body;

  bcrypt.hash(password, 10).then(hash => {
    // on crée un instance d'utilisateur
    const newUser = new User({
      // on remplit l'instance avec les informations envoyées par la requete de l'internaute : req.body.nom_du_champ
      email: email,
      phone: phoneNumber,
      password: hash,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      nationality: nationality,
      countryOfResidence: residence,
      civility: civility,
    });

    const newProfile = new Profile({
      type: req.body.type,
      userId: newUser._id,
    });

    // on sauvegarde l'utilisateur en base de données grace a la fonction .save() de mongoose
    newUser
      .save()
      // on définit des méthodes de résolution au cas ou la requete se passe bien ou mal
      .then(() => {
        newProfile.save().then(() => {
          res.status(201).render("login", {
            message: "votre compte utilisateur a bien été crée",
          });
        });
      })
      .catch(error => {
        res.status(400).render("register", { message: error });
      });
  });
};
exports.login = (req, res,next) => {
  passport.authenticate("local", {
    successRedirect: "/user/dashboard",
    failureRedirect: "/user/login",
  })(req, res, next);
};
exports.put = (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  ).then(() =>
    res.status(200).json({ message: "Vos données ont été modifiées" })
  );
};
exports.delete = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur Supprimé" }))
    .catch(error => res.status(400).json({ error }));
};
