const userError = require('./userError')

module.exports = function (handler) {
    return async (data) => {
        try {
            return await handler(data)
        } 
        catch (ex) {
            if(['userError'].includes(ex.name)){
                throw new userError(ex.message, ex.status) 
            } else{
                throw new userError('Something went wrong. Please try again later', ex.status , ex.message) ;
            }  
        }
    } 
}