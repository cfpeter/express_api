const express = require('express');
const router = express.Router();
const { getLog } = require('../controller/logger');
 

router.get('/getLog', getLog ); 
 


module.exports = router;