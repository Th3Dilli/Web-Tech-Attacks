let cfg = require('../config.json')
const express = require('express');
const router = express.Router();
const getDb = require("../connectDB").getDb;
const auth = require('../auth');

router.get('/',auth, (req, res) => {
    console.log("home")
})

module.exports = router;