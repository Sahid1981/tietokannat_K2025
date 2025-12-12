const db2 = require('../database2');

const opiskelija = {
  getAll: function(callback) {
    return db2.query('select * from opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db2.query('select * from opiskelija where idopiskelija=?', [id], callback);
  },
  add: function(opiskelijaObj, callback) {
    return db2.query(
      'insert into opiskelija (etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?)',
      [opiskelijaObj.etunimi, opiskelijaObj.sukunimi, opiskelijaObj.osoite, opiskelijaObj.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db2.query('delete from opiskelija where idopiskelija=?', [id], callback);
  },
  update: function(id, opiskelijaObj, callback) {
    return db2.query(
      'update opiskelija set etunimi=?, sukunimi=?, osoite=?, luokkatunnus=? where idopiskelija=?',
      [opiskelijaObj.etunimi, opiskelijaObj.sukunimi, opiskelijaObj.osoite, opiskelijaObj.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;