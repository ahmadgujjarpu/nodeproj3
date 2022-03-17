const jwt = require("jsonwebtoken");

const config = require('../config/config')
const User= require("../models/user.model")

const verifyToken= (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exists
  if (token) {
     jwt.verify(token,config.jwt.JWT_SECRET, (err, decoded) => {
          if (err) {
              console.log(err.message);
              res.send("Please sign in");
          } else {
              console.log(decoded.email);
              next();
          }
      });
  } else
  res.send("please sign in");
};

const setViewUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'tokensecret', async (err, decoded) => {
            if (err) {
                res.locals.user = null;
            } else {
                let user = await User.user.findOne(decoded.email);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
    }
};

module.exports = {verifyToken,
setViewUser};