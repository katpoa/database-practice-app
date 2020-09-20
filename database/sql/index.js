var mysql = require('mysql');

var sqldb = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourpassword',
  database: 'practice_app'
});

sqldb.connect();

var store = function(data) {
  let query = `insert into person (age, name) values ("${data.age}", "${data.name}")`
  sqldb.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
}

var retrieve = function(callback) {
  let query = 'select name, age from person'
  sqldb.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      callback(data)
    }
  })
}

module.exports.store = store;
module.exports.retrieve = retrieve;