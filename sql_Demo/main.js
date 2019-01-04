let mysql = require("mysql");

let sql = "SELECT * from users where username = ";
let value = mysql.escape("admin");
sql += value;
console.log(sql)
//SELECT * from users where username = 'admin'

let sql2 = "SELECT * from users where username = ?";
let value2 = "admin";
sql2 = mysql.format(sql2,[value2]);
console.log(sql2)
//SELECT * from users where username = 'admin'

let id = mysql.escapeId("users");
let value3 = mysql.escape("admin");
let sql3 = "SELECT * from "+ id +" where username = "+ value3 +"";
console.log(sql3);
//SELECT * from `users` where username = 'admin'

let sql4 = "SELECT * from ?? where username = ?";
sql4 = mysql.format(sql4,["users","admin"]);
console.log(sql4)
//SELECT * from `users` where username = 'admin'