const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth.js");

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("./dashboard/index", { user: req.user });
});
router.get("/2", ensureAuthenticated, (req, res) => {
  res.render("./dashboard/dashboard-2", { user: req.user });
});
router.get('./logout', ensureAuthenticated, (req,res)=>{
    req.logout();
    res.redirect('/user/login')
})
module.exports = router;
