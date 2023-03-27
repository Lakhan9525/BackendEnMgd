

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "182723763788-fpdjirmd660l8lfd410adi8humefhce3.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const FACEBOOK_APP_ID = "677581597469560"
const FACEBOOK_APP_SECRET = "0dabb2a7676bd64887672c36d3886f46"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://entrnsh.onrender.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    done(null,profile)
  }

));

//facebook
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "https://entrnsh.onrender.com/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  done(null,profile)
}
));




















//passport
passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });