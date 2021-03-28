const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../Model/User");

module.exports = passport => {

  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
        .then(user => {
          if (!user) {
            return done(null, false, {
              message: "votre email n'existe pas en base de données",
            });
          }
          bcrypt.compare(password, user.password, (err, res) => {
            if (err) throw err;

            if (res) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: "Votre mot de passe est incorrect",
              });
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
