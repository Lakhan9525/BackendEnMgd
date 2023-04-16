const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

//const CLIENT_URL = "http://localhost:3000/";
//const CLT_URL = "https://magical-dolphin-b8849e.netlify.app"

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";


const REGISTER_URL = process.env.REGISTER_URL || `${CLIENT_URL}/register`;





router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    }
  });
  
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });
  
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

//google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    //successRedirect: "http://localhost:3000/register",
    //successRedirect: `${CLIENT_URL}/register`,
    successRedirect: REGISTER_URL,


    failureRedirect: "/login/failed",
  })
);

//facebook

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


module.exports = router
