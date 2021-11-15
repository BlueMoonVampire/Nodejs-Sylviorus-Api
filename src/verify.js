const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.KEY, (err, userid) => {
      console.log(err);
      if (err) {
        return res.status(403).json(err, "Token invalid!");
      } 
   
      req.userid = userid;
      next();
    });
  } else {
    return res.status(401).json("You're not authenticate");
  }
}

module.exports = verify;
