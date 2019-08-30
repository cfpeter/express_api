const customerService = require('../services/customer')
const asyncError = require('../middleware/async-error')


const listCustomerType = asyncError(async (req, res, next) => { 
    const cs = await customerService();  
    const result = await cs.listCustomerType();  
    res.status(200).json(result)  
});



 
module.exports = {
    listCustomerType
}