const jwt = require("jsonwebtoken");

const config = require('../config/config')

const verifyToken = (req, res, next) => {
    
 const token=req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.jwt.JWT_SECRET);
    // req.email = decoded;
    return next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  
};

module.exports = verifyToken;