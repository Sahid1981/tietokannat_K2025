const db2 = require('../database2');

const opintojakso = {
  getAll: function(callback) {
    return db2.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db2.query('select * from opintojakso where idopintojakso=?', [id], callback);
  },
  add: function(opintojaksoObj, callback) {
    return db2.query(
      'insert into opintojakso (nimi,laajuus,tunnus) values(?,?,?)',
      [opintojaksoObj.nimi, opintojaksoObj.laajuus, opintojaksoObj.tunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db2.query('delete from opintojakso where idopintojakso=?', [id], callback);
  },
  update: function(id, opintojaksoObj, callback) {
    return db2.query(
      'update opintojakso set nimi=?, laajuus=?, tunnus=? where idopintojakso=?',
      [opintojaksoObj.nimi, opintojaksoObj.laajuus, opintojaksoObj.tunnus, id],
      callback
    );
  }
};
module.exports = opintojakso;