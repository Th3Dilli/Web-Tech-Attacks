let cfg = require('./config.json')
let mysql = require('mysql');

let _db;

let initDatabase = new Promise((resolve, reject) => {

    _db = mysql.createConnection({
      host     : cfg.database.host,
      user     : cfg.database.user,
      password : cfg.database.password,
      database : cfg.database.db
    });
    
    //connect to database
    _db.connect((error)=>{
        if(error)
        {
            reject();
        }
        resolve();
        console.log("Database is connected...");
    });
});

function getDb() {
    if (!_db) {
        console.log("Db has not been initialized. Please call init first.");
        return;
    }
    return _db;
}

module.exports = {
    getDb,
    initDatabase
};