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
                    message: "Error occured"
                });
                return;
            }
            else if(results.length < 1)
            {
                res.status(401).json(
                {
                    message: "Login failed"
                });
                return;
            }
            else
            {
                let token = Math.floor(Math.random() * 10000);
                database.query('UPDATE users SET token = ? WHERE username = ? AND password = ?',[token,username, password]);
                res.status(200).json(
                {
                    //message: "Logged in as ",
                    username : results[0].username,
                    token : token
                });
            }
        });
});

module.exports = router;