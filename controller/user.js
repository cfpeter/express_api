const userService = require('../services/user')

const getUserById = async (req, res, next) => {
    try { 
        //init the person service
        const us = await userService();     
        const result = await us.getPersonById(req.params.id);
        
        res.status(200).send(result)  
        next();
    } catch(e) {
        res.status(500).send(e.message); 
    }
};

module.exports = {
    getUserById
}