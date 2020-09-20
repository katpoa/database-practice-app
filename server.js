const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongodb = require('./database/mongo')
const sqldb = require('./database/sql')
const mongoose = require('mongoose')
const router = require('./server/router');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

// app.post('/sql', (req, res) => {
//   let data = req.body;
//   let query = `insert into person (age, name) values ("${data.age}", "${data.name}")`
//   sqldb.store(data)
//   res.send('received post request')
// })

// app.post('/mongo', (req, res) => {
//   let data = req.body;
//   console.log(data);
//   mongodb.save(data);
//   res.send('received post request');
// })

// app.get('/sql', (req, res) => {
//   sqldb.retrieve((data) => {
//     res.send(data)
//   })
// })

// app.get('/mongo', (req, res) => {
//   mongodb.retrieve((data)=> {
//     res.send(data)
//   })
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

