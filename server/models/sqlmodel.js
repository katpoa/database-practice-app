const express = require('express');
const db = require('../../database/sql');

module.exports = {
  post: (age, name, callback) => {
    db.sqldb.query('Insert into person (age, name) values (?, ?)', [age, name], callback);
  },

  get: (callback) => {
    db.sqldb.query('Select * from person', callback);
  }

}