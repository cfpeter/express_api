const customerError = require('./customerError')

module.exports = function (handler) {
    return async () => {
        try { 
            return await handler()
        } catch (ex) { 
            if(['customerError'].includes(ex.name)){
                throw new customerError(ex.message, ex.status) 
            } else{
                throw new customerError('Something went wrong. Please try again later', ex.status , ex.message) ;
            }  
        }
    } 
}