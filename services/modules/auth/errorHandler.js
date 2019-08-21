const authError = require('./authError')

module.exports = function (handler) {
    return async (data) => {
        try {
            await handler(data)
        } catch (ex) {   
            throw new authError(ex.message, ex.status) 
        }
    } 
}