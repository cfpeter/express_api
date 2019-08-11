const dataClient = require('../repository');

module.exports = async () =>{ 
    
    let db = await dataClient();  

    const getPersonById = async (customerID) => {
        try {  
            const userResult = await db.user.getUserByID(customerID);
            return userResult.recordset[0]
        } catch(e) {
            throw new Error(e.message)
        }
    }
 
    return {
        getPersonById
        
    }
}
 
