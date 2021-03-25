const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const expressEjsLayout = require("express-ejs-layouts");

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.set("view engine", "ejs");
app.use(expressEjsLayout);

mongoose
  .connect(
    "mongodb+srv://thomas:thomas123456@cluster0.jtccx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("vous etes connecter"))
  .catch(() => console.log("vous n'êtes pas connecter"));

app.get("/", (req, res) => {
  res.render("welcome", { title: "index", h1: "Veuillez vous inscrire" });
});

app.listen(8080);
