const dataClient = require('../repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi')
const {loginValidation , userRegisterValidation } = require('./modules/auth')
const config = require('../config');

module.exports = async () =>{ 
    
    let db = await dataClient();
     
    const addUserRegister = async (payload) => {
        try {   
            const {firstName, lastName,gender, email,userName,passCode, customerTypeName } = payload;
            await userRegisterValidation(firstName, lastName,gender, email,userName,passCode, customerTypeName);
            
            //hash and salt the passCode
            const salt = await bcrypt.genSalt(10)
            const hashSaltPass = await bcrypt.hash(payload.passCode , salt);
             
            const data = 
            {
                firstName: payload.firstName, 
                lastName: payload.lastName, 
                email: payload.email,   
                gender: payload.gender,
                userName: payload.userName,
                passCode: hashSaltPass,
                salt: salt,
                createdBy: `${payload.firstName} ${payload.lastName}`,
                customerTypeName: payload.customerTypeName
            }

            const result = await db.auth.addUserRegister(data); 

            const token = jwt.sign(
                {
                    id: result.recordset[0].CustomerID, 
                    name: `${result.recordset[0].firstName} ${result.recordset[0].lastName}`
                },
                config.jwtPrivateKey );
             
            return token
        } catch(e) { 
            if(!e.name){
                throw new Error(e);
            }
            else{
                throw new Error('Something went wrong. Please try again later.')
            }
                
        }
    }

    const login = async (userName, passWord) => {
        try{ 
            //first validate the login
            await loginValidation(userName, passWord); 
            
            //get login be username
            const user = await db.auth.getLoginByUserName(userName)
            
            //if login doesn't exist
            if( user.recordset.length == 0 || user.recordset[0].userName !== userName) 
                throw ('Invalid UserName or Password.'); 
                
            //else, check incoming password with the matching user password
            const validPassword = await bcrypt.compare(passWord , user.recordset[0].passCode);
           
            //if not matches send error back 
            if(!validPassword) 
                throw ('Invalid UserName or Password. - 2'); 
            
            //else we are good here
            const token = jwt.sign({
                id: user.recordset[0].CustomerID, 
                name: user.recordset[0].name
            }, config.jwtPrivateKey );
            
            return token; 

        }catch(e){ 
            if(!e.name)
                throw new Error(e);
            else
                throw new Error('Something went wrong. Please try again later.')
        }
    };
 
    const logout = async () => {
        try{
            const obj = {
                success : true,
                errors: []
            }
            return obj;
        }catch(e){
            throw new Error(e)
        }
    }

    
    return {
        addUserRegister,
        login,
        logout
        
    }
}

// module.exports = person
