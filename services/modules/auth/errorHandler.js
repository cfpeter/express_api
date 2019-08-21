const authError = require('./authError')

module.exports = function (handler) {
    return async (data) => {
        try {
            return await handler(data)
        } 
        catch (ex) {
            if(['authError'].includes(ex.name)){
                throw new authError(ex.message, ex.status) 
            } else{
                throw new authError('Something went wrong. Please try again later', ex.status , ex.message) ;
            }  
        }
    } 
}