const personService = require('../services/person')
const asyncError = require('../middleware/async-error')


const getPerson = async (req, res, next) => {
    try { 
        //init the person service
        const ps = await personService();  
        const result = await ps.getPerson();
        res.send(result) 
    
        next();
    } catch(e) {
        throw (e) 
    }
};

 

const addPerson = asyncError(async (req, res, next) =>{ 
        const ps = await personService();    
        const result = await ps.addPerson(req.body); 
        res.status(200).send(result) 
})

const updatePerson = asyncError(async (req, res, next) =>{ 
        const ps = await personService();   
        
        const result = await ps.updatePerson(req.body); 
        res.status(200).send(result)
        next() 
})

 
module.exports = {
    getPerson,
    addPerson,
    updatePerson
}