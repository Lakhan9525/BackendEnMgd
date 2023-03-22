const mongoose = require('mongoose');
const User = require('./models/user'); // assuming you have a User model defined

// connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/user?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // check if user exists in database
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          done(null, existingUser);
        } else {
          // create new user and save to database
          const user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          const newUser = await user.save();
          done(null, newUser);
        }
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const existingUser = await User.findOne({ githubId: profile.id });
        if (existingUser) {
          done(null, existingUser);
        } else {
          const user = new User({
            githubId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          const newUser = await user.save();
          done(null, newUser);
        }
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'email'],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const existingUser = await User.findOne({ facebookId: profile.id });
        if (existingUser) {
          done(null, existingUser);
        } else {
          const user = new User({
            facebookId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          const newUser = await user.save();
          done(null, newUser);
        }
      } catch (err) {
        done(err, null);
      }
    }
  )
);
