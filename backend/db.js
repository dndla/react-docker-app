const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit : 5,
    host: 'mysql',
    user : 'root',
    password : 'wooim',
    database : 'myapp'
});

exports.pool = pool;


