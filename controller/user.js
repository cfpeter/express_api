const userService = require('../services/user')

const asyncError = require('../middleware/async-error')

const getUserById = asyncError(async (req, res, next) => {
   
    //init the person service
    const us = await userService();     
    const result = await us.getPersonById(req.params.id); 
    res.status(200).send(result)   
});

module.exports = {
    getUserById
}