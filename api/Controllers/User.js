const User = require("../Model/User");
const Profile = require("../Model/Profile");
const bcrypt = require("bcrypt");
exports.register = (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    console.log(hash)
    // on crée un instance d'utilisateur
    const newUser = new User({
      //on remplit l'instance avec les informations envoyées par la requete de l'internaute : req.body.nom_du_champ
      email: req.body.email,
      phone: req.body.phoneNumber,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      nationality: req.body.nationality,
      countryOfResidence: req.body.residence,
      civility: req.body.civility,
    });

    const newProfile = new Profile({
      type: req.body.type,
      userId: newUser._id,
    });

    //on sauvegarde l'utilisateur en base de données grace a la fonction .save() de mongoose
    newUser
      .save()
      //on définit des méthodes de résolution au cas ou la requete se passe bien ou mal
      .then(() => {
        newProfile.save().then(() => {
          res.status(201).render("index", {
            message: "votre compte utilisateur a bien été crée",
          });
        });
      })
      .catch(error => {
        res.status(400).render("index", { message: error });
      });
  });
};
exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then(user =>
    console.log(user.firstName)
  );
  if (!user) {
    return res
      .status(401)
      .json({ message: "utilisateur non trouvée dans notre base de données" });
  }
  if (req.body.password != user.password) {
    return res
      .status(401)
      .json({ message: "utilisateur non trouvée dans notre base de données" });
  }
  res.status(200).json({
    userId: user._id,
    token: "TOKEN",
  });
};
