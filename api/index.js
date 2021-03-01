const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Model/User");
const userRoute = require("./routes/user");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.set("view engine", "pug");

mongoose
  .connect(
    "mongodb+srv://thomas:thomas123456@cluster0.jtccx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("vous etes connecter"))
  .catch(() => console.log("vous n'êtes pas connecter"));

app.get("/", (req, res) => {
  res.render("index", { title: "index", h1: "Veuillez vous inscrire" });
});

app.listen(8080);
