const personService = require('../services/person')
const asyncError = require('../middleware/async-error')


const getPerson = asyncError(async (req, res, next) => { 
        //init the person service
        const ps = await personService();  
        const result = await ps.getPerson();
        res.send(result)  
});

 

const addPerson = asyncError(async (req, res, next) =>{ 
        const ps = await personService();    
        const result = await ps.addPerson(req.body); 
        res.status(200).send(result) 
})

const updatePerson = asyncError(async (req, res, next) =>{ 
        const ps = await personService();    
        const result = await ps.updatePerson(req.body); 
        res.status(200).send(result) 
})

 
module.exports = {
    getPerson,
    addPerson,
    updatePerson
}