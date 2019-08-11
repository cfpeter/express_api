const personService = require('../services/person')


const getPerson = async (req, res, next) => {
    try { 
        //init the person service
        const ps = await personService();  
        const result = await ps.getPerson();
        res.send(result) 
    
        next();
    } catch(e) {
        console.log(e)
    }
};

 

const addPerson = async (req, res, next) =>{
    try {
        const ps = await personService();   
        
        const result = await ps.addPerson(req.body);
        // console.log(result);
        res.status(200).send(result)
        next()
    } catch (error) {
        throw new Error(error)
    }
}

 
module.exports = {
    getPerson,
    addPerson
}