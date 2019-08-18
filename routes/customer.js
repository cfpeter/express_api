const express = require('express');
const router = express.Router();
const { listCustomerType } = require('../controller/customer');
 

router.get('/listCustomerType', listCustomerType ); 
 


module.exports = router;