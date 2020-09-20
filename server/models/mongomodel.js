const express = require('express');
const Person = require('../../database/mongo');

module.exports = {
  post: (data, callback) => {
    Person.create({name: data.name, age: data.age}, callback)
  },

  get: (callback) => {
    Person.find().select('name age').exec(callback);
  }
}