const mysql = require('mysql');


const connection = mysql.createConnection({

    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : 'ethanHunt@123',
    database : 'usersdata'

});


module.exports = connection;