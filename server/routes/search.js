let cfg = require('../config.json')
const express = require('express');
const router = express.Router();
const getDb = require("../connectDB").getDb;
const auth = require('../auth');

router.get('/',auth, (req, res) => {
    console.log("search")
    res.status(200).json(
        {
            message: "Logged in as "
        });
})

module.exports = router;