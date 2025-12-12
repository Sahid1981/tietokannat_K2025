const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const connection2 = mysql.createPool(process.env.SQL_SERVER2);

module.exports = connection2;

connection2.query('SHOW TABLES', function(err, result, fields){
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connection successful', result);
    }
});