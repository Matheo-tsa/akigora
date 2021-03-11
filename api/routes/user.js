const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/User')

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/:id", (req, res) => {});
router.put("/update/{id}", (req, res) => {});
router.delete("/delete/{id}", (req, res) => {});


module.exports = router;
