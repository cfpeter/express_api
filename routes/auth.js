const express = require('express');
const router = express.Router();
const {addUserRegister, login, logout} = require('../controller/auth');
 

router.post('/register', addUserRegister ); 

router.post('/login', login );

router.post('/logout', logout );


module.exports = router;