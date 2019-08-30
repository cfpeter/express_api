const authService = require('../services/auth')
const jwt = require('jsonwebtoken'); 
const asyncError = require('../middleware/async-error')

const addUserRegister = asyncError( async (req, res, next) => { 
        const auth = await authService();  
        const token = await auth.addUserRegister(req.body); 
        res.header('x-auth-token' , token)
        .status(200).send(token)  
})

const login = asyncError( async (req, res) => {
    const auth = await authService();    
    const token = await auth.login( req.body );  
    res.header('x-auth-token', token).status(200).send(token);  
})


const logout = asyncError(async (req, res, next) =>{  
    const auth = await authService();   
    const result = await auth.logout();   
    res.status(200).json(result); 
})

 
module.exports = {
    addUserRegister,
    login,
    logout
}