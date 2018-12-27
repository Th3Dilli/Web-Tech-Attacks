let cfg = require('../config.json')
const express = require('express');
const router = express.Router();
const getDb = require("../connectDB").getDb;



router.post('/', (req, res) => {
    const database = getDb();

    let username = req.body.username;
    let password = req.body.password;

    //  ' or '1' ='1
    let sql = "SELECT * FROM users WHERE username = '"+ username +"' AND password = '"+ password + "'";
    console.log(sql);
    database.query(sql,
        (error, results, fields) =>
        {
            if(error)
            {
                res.status(400).json(
                {
                    message: "error occured"
                });
                return;
            }
            else if(results.length < 1)
            {
                res.status(401).json(
                {
                    message: "login failed"
                });
                return;
            }
            else
            {
                res.status(200).json(
                {
                    message: "login ok",
                    username : results
                });
            }
        });
});

module.exports = router;