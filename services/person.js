const dataClient = require('../repository'); 
const handler = require('./modules/person/errorHandler')
const personError = require('./modules/person/personError')

module.exports = async () =>{ 
    
    let db = await dataClient();  

    const getPerson = handler (async () => { 
        return await db.person.getPerson() ; 
    })

    const addPerson = async (payload) => {
        try { 
            //1 validation
            //2 insert
            const data = { 
                firstName: payload.firstName,
                lastName : payload.lastName,
                dob: payload.dob,
                gender: payload.gender,
                email: payload.email,
                cellPhone: payload.cellPhone,
                otherPhone: payload.otherPhone
            }
            
            return await db.person.addPerson(   
                data.firstName,
                data.lastName,
                data.dob,
                data.gender,
                data.email,
                data.cellPhone,
                data.otherPhone
            ) ;
            
        } catch(e) {
            throw new Error(e.message)
        }
    }


    const updatePerson = handler( async (payload) => {
      
            //validation ex:joi
            const data = {
                personID: payload.PersonID,
                customerID: payload.CustomerID,
                firstName: payload.firstName,
                lastName : payload.lastName,
                dob: payload.dob,
                gender: payload.gender,
                email: payload.email,
                cellPhone: payload.cellPhone,
                otherPhone: payload.otherPhone
            }
            
            return await db.person.updatePerson(
                data.personID,
                data.customerID,
                data.firstName,
                data.lastName,
                data.dob,
                data.gender,
                data.email,
                data.cellPhone,
                data.otherPhone
            ); 
    })

    return {
        getPerson,
        addPerson,
        updatePerson
        
    }
}

// module.exports = person
