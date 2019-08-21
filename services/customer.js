const dataClient = require('../repository');
// const customerError = require('./modules/customer/customerError')
const handler = require('./modules/customer/errorHandler')

module.exports = async () =>{ 
    
    let db = await dataClient();  

    const listCustomerType = handler( async () => { 
        return await db.customer.listCustomerType();  
    })

    return {
        listCustomerType        
    }
}
 
