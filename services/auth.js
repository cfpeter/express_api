const dataClient = require('../repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const {loginValidation , userRegisterValidation } = require('./modules/auth/auth')
const config = require('../config');
const handler = require('./modules/auth/errorHandler')
const authError = require('./modules/auth/authError')

module.exports = async () =>{ 
    
    let db = await dataClient();
     
    const addUserRegister = handler( async (payload) => {
        
        const {firstName, lastName,gender, email,userName,password, customerTypeName } = payload;

        //get login by username
        const userCheck = await db.auth.getLoginByUserName(userName)
            
        //if login doesn't exist 
        if( userCheck.recordset.length) 
            throw new authError ('User already exist.' , 400); 

        await userRegisterValidation(firstName, lastName,gender, email,userName,password, customerTypeName);
        
        //hash and salt the password
        const salt = await bcrypt.genSalt(10)
        const hashSaltPass = await bcrypt.hash(payload.password , salt);
            
        const data = 
        {
            firstName: payload.firstName, 
            lastName: payload.lastName, 
            email: payload.email,   
            gender: payload.gender,
            userName: payload.userName,
            password: hashSaltPass,
            salt: salt,
            createdBy: `${payload.firstName} ${payload.lastName}`,
            customerTypeName: payload.customerTypeName
        }

        const {recordset} = await db.auth.addUserRegister(data); 

        const token = jwt.sign({
                customerID: recordset[0].CustomerID, 
                fullName:   recordset[0].fullName,
                isAdmin:    recordset[0].isAdmin,
                userName:   recordset[0].userName
            },
            config.jwtPrivateKey );
            
        return token;
    })

    const login = handler( async (data) => { 
            const {userName , password } = data;
            //first validate the login
            await loginValidation(userName, password);  
            
            //get login by username
            const {recordset} = await db.auth.getLoginByUserName(userName)
             
            //if login doesn't exist   
            if( !recordset.length) 
                throw new authError('Invalid user name or password', 400);     
                
            //else, check incoming password with the matching user password
            const validpassword = await bcrypt.compare(password , recordset[0].password);
           
            //if doesn't matche then send error back 
            if(!validpassword) 
                throw new authError('Invalid user name or password', 400);     

            //else we are good here send token back
            const token = jwt.sign({
                customerID: recordset[0].CustomerID,  
                fullName:   recordset[0].fullName,
                isAdmin:    recordset[0].isAdmin,
                userName:   recordset[0].userName
            }, config.jwtPrivateKey ); 
            return token
    });
 
    const logout = handler( async () => { 
            const obj = {
                success : true,
                errors: []
            }
            return obj; 
    })

    
    return {
        addUserRegister,
        login,
        logout
        
    }
}

// module.exports = person
