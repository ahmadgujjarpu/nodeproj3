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
              console.log(decoded.id);
              next();
          }
      });
  } else
  res.send("please sign in");
};

const setViewUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token,config.jwt.JWT_SECRET, async (err, decoded) => {
            if (err) {
                res.locals.user = null;
            } else {
                console.log(decoded.id);
                return decoded.id;
            }
        });
    } else {
        res.locals.user = null;
    }
};

module.exports = {verifyToken,
setViewUser};