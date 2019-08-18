const customerService = require('../services/customer')


const listCustomerType = async (req, res, next) => {
    try { 
        //init the person service
        const cs = await customerService();  
        const result = await cs.listCustomerType();
        // console.log(result)
        res.status(200).json(result) 
        next();
    } catch(e) {
        // console.log(e)
        throw (e.message)
    }
};



 
module.exports = {
    listCustomerType
}