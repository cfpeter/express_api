const customerService = require('../services/customer')


const listCustomerType = async (req, res, next) => {
    try { 
        //init the person service
        const cs = await customerService();  
        const result = await cs.listCustomerType(); 
        res.status(200).json(result) 
        next();
    } catch(e) { 
        throw (e.message)
    }
};



 
module.exports = {
    listCustomerType
}