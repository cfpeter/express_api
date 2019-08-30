const logger = require('../services/logger') 

const asyncError = require('../middleware/async-error')


const getLog = asyncError(async (req, res, next) => { 
  
        const l = await logger();  
        const result = await l.getLog();  
        res.send(result)   
});



 
module.exports = {
    getLog
}