const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "sildavia",
    port: 3306,
    database: 'gimnasio'
})

global.db = pool.promise();