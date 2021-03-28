const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User");

router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login", { title: "connectez-vous !" });
});
router.get("/dashboard", (req, res) => {
    res.render("./dashboard/index", { user: req.user });
  });
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update/{id}", UserController.put);
router.delete("/delete/{id}", UserController.delete);

module.exports = router;
