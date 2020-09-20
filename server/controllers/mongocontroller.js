const express = require('express');
const model = require('../models/mongomodel');

module.exports = {
  post: (req, res) => {
    model.post(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log('Posted to mongodb!', data);
        res.status(200).send();
      }
    })
  },

  get: (req, res) => {
    model.get((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}