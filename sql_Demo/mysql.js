let mysql = require("mysql");

let sql = "SELECT * from users where username = ";
let value1_1 = mysql.escape("admin");
let value1_2 = mysql.escape("admin ' or 1 = '1 -- ");
console.log(sql + value1_1)
console.log(sql + value1_2)
// SELECT * from users where username = 'admin'
// SELECT * from users where username = 'admin \' '

let sql2 = "SELECT * from users where username = ?";
let value2_1 = "admin";
let value2_2 = "admin ' ";
console.log(mysql.format(sql2,[value2_1]));
console.log(mysql.format(sql2,[value2_2]))
// SELECT * from users where username = 'admin'
// SELECT * from users where username = 'admin \' '

let id1_1 = mysql.escapeId("users");
let id1_2 = mysql.escapeId("users `Test ");
let value3_1 = mysql.escape("admin");
let value3_2 = mysql.escape("admin ' ");
console.log("SELECT * from "+ id1_1 +" where username = "+ value3_1);
console.log("SELECT * from "+ id1_2 +" where username = "+ value3_2);
// SELECT * from `users` where username = 'admin'
// SELECT * from `users ``Test ` where username = 'admin \' '

let sql4 = "SELECT * from ?? where username = ?";
console.log(mysql.format(sql4,["users","admin"]))
console.log(mysql.format(sql4,["users `Test ","admin ' "]))
// SELECT * from `users` where username = 'admin'
// SELECT * from `users ``Test ` where username = 'admin \' '

let db = mysql.createConnection(/* con details */);
db.query("SELECT * from ?? where username = ?", ["users", "admin"], () => { /* do something */ });
// query => SELECT * from `users` where username = 'admin'

db.query("SELECT * from ?? where username = ?", ["users `Test ", "admin ' "], () => { /* do something */ });
// query => SELECT * from `users ``Test ` where username = 'admin \' '