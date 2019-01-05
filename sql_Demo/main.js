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

let id = mysql.escapeId("users");
let value3_1 = mysql.escape("admin");
let value3_2 = mysql.escape("admin ' ");
console.log("SELECT * from "+ id +" where username = "+ value3_1);
console.log("SELECT * from "+ id +" where username = "+ value3_2);
// SELECT * from `users` where username = 'admin'
// SELECT * from `users` where username = 'admin \' '

let sql4 = "SELECT * from ?? where username = ?";
console.log(mysql.format(sql4,["users","admin"]))
console.log(mysql.format(sql4,["users","admin ' "]))
// SELECT * from `users` where username = 'admin'
// SELECT * from `users` where username = 'admin \' '
mysql.cr