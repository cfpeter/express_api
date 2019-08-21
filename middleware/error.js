const logger = require('../startup/logger');  

module.exports = (err, res, req, next) => { 
    logger.error(err.message, err)   
    next(err)
}