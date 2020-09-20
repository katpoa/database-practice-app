const mongoose = require('mongoose');
const { Schema } = mongoose;

//connecting to database
var mongoDB = 'mongodb://127.0.0.1:27017/practice_app'
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const personSchema = new Schema({
  name: String,
  age: Number
})


var Person = mongoose.model('Person', personSchema)

var save = function(data) {
  Person.create({name: data.name, age: data.age}, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('saving data')
    }
  })
}

var retrieve = function(callback) {
  Person.find().select('name age').exec(function(err, person) {
    if (err) {
      console.log(err)
    } else {
      callback(person)
    }
  })
}

module.exports.save = save;
module.exports.retrieve = retrieve;