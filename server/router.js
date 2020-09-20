const express = require('express');
const router = express.Router();
const sqlcontroller = require('./controllers/sqlcontroller');
const mongocontroller = require('./controllers/mongocontroller');


router.post('/sql', sqlcontroller.post);

router.get('/sql', sqlcontroller.get);

router.post('/mongo', mongocontroller.post);

router.get('/mongo', mongocontroller.get);

module.exports = router;
