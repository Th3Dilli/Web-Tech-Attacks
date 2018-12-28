let cfg = require('./config.json')
const getDb = require("./connectDB").getDb;

// verify token using cfg.auth.jwt_key
module.exports = (req, res, next) => {
    const db = getDb();
    let token =req.headers.authorization;
    db.query("SELECT * FROM users WHERE token = ?",[token],(error, result, fields)=>{
        console.log(token);
        if(error)
        {
            res.status(401).json(
            {
                message: "error occured"
            });
            console.log("error occured")
        }
        if(result.length >  0)
        {
            console.log("Authentification OK")
            next(); // call on success
        }
        else
        {
            res.status(400).json(
            {
                message: "Authentication failed"
            });
            console.log("Authentication failed")
        }
        
    });
};
