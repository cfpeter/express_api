const dataClient = require('../repository');

module.exports = async () =>{ 
    
    let db = await dataClient();  

    const listCustomerType = async () => {
        try { 
            return await db.customer.listCustomerType();
        } catch(e) {
            throw new Error(e.message)
        }
    }

    return {
        listCustomerType        
    }
}

// module.exports = person
