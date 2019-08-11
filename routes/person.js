const express = require('express');
const router = express.Router();
const {getPerson, addPerson } = require('../controller/person');
 

router.get('/', getPerson );
 

router.post('/add', addPerson );

module.exports = router;