const db2 = require('../database2');

const arviointi = {
  getAll: function(callback) {
    return db2.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db2.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  add: function(arviointiObj, callback) {
    return db2.query(
      'insert into arviointi (idopiskelija,idopintojakso,paivamaara,arvosana) values(?,?,?,?)',
      [arviointiObj.idopiskelija, arviointiObj.idopintojakso, arviointiObj.paivamaara, arviointiObj.arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db2.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointiObj, callback) {
    return db2.query(
      'update arviointi set idopiskelija=?, idopintojakso=?, paivamaara=?, arvosana=? where idarviointi=?',
      [arviointiObj.idopiskelija, arviointiObj.idopintojakso, arviointiObj.paivamaara, arviointiObj.arvosana, id],
      callback
    );
  }
};
module.exports = arviointi;