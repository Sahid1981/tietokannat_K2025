const db = require('../database');

const borrower = {
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  add: function(borrowerObj, callback) {
    return db.query(
      'insert into borrower (fname,lname,streetaddress) values(?,?,?)',
      [borrowerObj.fname, borrowerObj.lname, borrowerObj.streetaddress],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrowerObj, callback) {
    return db.query(
      'update borrower set fname=?, lname=?, streetaddress=? where id_borrower=?',
      [borrowerObj.fname, borrowerObj.lname, borrowerObj.streetaddress, id],
      callback
    );
  }
};
module.exports = borrower;
