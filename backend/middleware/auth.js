const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req,res,next){
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied. Not authorized!");
    try{
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decode = jwt.verify(token, jwtSecretKey);
        req.user = decode;
        next();
    } catch(ex){
        res.status(400).send("Invalid authentication token!");
    }
}

module.exports = auth;