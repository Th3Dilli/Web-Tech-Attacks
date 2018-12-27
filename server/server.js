let cfg = require('./config.json');
let express = require('express');
let cors = require('cors');
const app = express();
app.use(express.static('public')); // host public folder
app.use(cors()); // allow all origins -> Access-Control-Allow-Origin: *
const database = require("./connectDB");

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies


const loginRoutes = require('./routes/login');

app.use("/login", loginRoutes);


// default route
app.use('/', function (req, res) {
    res.send('Hello World!');
  });

database.initDatabase.then(() => {
    app.listen(cfg.server.port, () => {
        console.log("Listening on port " + cfg.server.port + "...");
    });
}, () => {console.log("Failed to connect to DB!")});
