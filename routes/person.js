const express = require('express');
const router = express.Router();
const {getPerson, addPerson, updatePerson } = require('../controller/person');
 

router.get('/', getPerson );
 

router.post('/add', addPerson );

router.post('/update/:id', updatePerson );

module.exports = router;