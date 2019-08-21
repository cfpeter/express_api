const dataClient = require('../repository');
const handler = require('./modules/user/errorHandler')
const userError = require('./modules/user/userError')

module.exports = async () =>{ 
    
    let db = await dataClient();  

    const getPersonById =  handler ( async (customerID) => { 
        const userResult = await db.user.getUserByID(customerID);
        return userResult.recordset[0] 
    })
 
    return {
        getPersonById 
    }
}
 
