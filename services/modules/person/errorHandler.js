const personError = require('./personError')

module.exports = function (handler) {
    return async (data) => {
        try {
            return await handler(data)
        } 
        catch (ex) {
            if(['personError'].includes(ex.name)){
                throw new personError(ex.message, ex.status) 
            } else{
                throw new personError('Something went wrong. Please try again later', ex.status , ex.message) ;
            }  
        }
    } 
}