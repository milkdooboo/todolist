const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'thexder.iptime.org',
    database : 'ksa_todo_list',
    user : 'ksa',
    password : 'qwe123!@#',
    port : 3307
});

module.exports = pool; // 모듈 내보내기