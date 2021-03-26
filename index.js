const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// fonction de session
const session = require("express-session");
const passport = require("passport");
require("./config/passport")(passport);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTER

const userRoute = require("./routes/user");
const dashBoardRouter = require("./routes/dashboard");
app.use("/dashboard", dashBoardRouter);
app.use("/user", userRoute);

// définition moteur de template
app.set("view engine", "pug");

// connexion base de données
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://thomas:thomas123456@cluster0.jtccx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("vous etes connecter"))
  .catch(() => console.log("vous n'êtes pas connecter"));

// page d'accueil
app.get("/", (req, res) => {
  res.render("welcome", { title: "index", h1: "Veuillez vous inscrire" });
});

app.listen(8081);
