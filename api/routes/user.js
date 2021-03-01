const express = require("express");
const app = express();
const router = express.Router();
const User = require("../Model/User");

router.post("/register", (req, res) => {
  // on crée un instance d'utilisateur
  let newUser = new User({
    //on remplit l'instance avec les informations envoyées par la requete de l'internaute : req.body.nom_du_champ
    email : req.body.email,
    phone : req.body.phoneNumber,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    birthDate : req.body.birthDate,
    nationality : req.body.nationality,
    countryOfResidence : req.body.residence,
    civility : req.body.civility
  });
  //on sauvegarde l'utilisateur en base de données grace a la fonction .save() de mongoose
  newUser.save()
  //on définit des méthodes de résolution au cas ou la requete se passe bien ou mal 
  .then(() => res.status(201).render('index',{message : "votre compte utilisateur a bien été crée"}))
  .catch((error) => {res.status(400).render('index',{message : error})})
  
});
router.get("/:id", (req, res) => {});
router.put("/update/{id}", (req, res) => {});
router.delete("/delete/{id}", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
