const express = require('express');
const model = require('../models/sqlmodel');

module.exports = {
  post: (req, res) => {
    const { age, name } = req.body;
    model.post(age, name, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log('Posted to sqldb!', data);
        res.status(200).send()
      }
    });
  },

  get: (req, res) => {
    model.get((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
}