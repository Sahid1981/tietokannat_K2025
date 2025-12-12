const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createPool(process.env.SQL_SERVER);

// create tables if they do not exist
const createBookTable = `CREATE TABLE IF NOT EXISTS book (
  id_book int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  author varchar(255) DEFAULT NULL,
  isbn varchar(20) DEFAULT NULL,
  PRIMARY KEY (id_book)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

const createBorrowerTable = `CREATE TABLE IF NOT EXISTS borrower (
  id_borrower int(11) NOT NULL AUTO_INCREMENT,
  fname varchar(40) DEFAULT NULL,
  lname varchar(40) DEFAULT NULL,
  streetaddress varchar(40) DEFAULT NULL,
  PRIMARY KEY (id_borrower)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

connection.query(createBookTable, function(err){
  if (err) console.error('Create book table error:', err);
  else console.log('Book table ready');
});

connection.query(createBorrowerTable, function(err){
  if (err) console.error('Create borrower table error:', err);
  else console.log('Borrower table ready');
});

module.exports = connection;

connection.query('SHOW TABLES', function(err, result, fields){
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connection successful', result);
    }
});