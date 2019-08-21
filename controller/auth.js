const authService = require('../services/auth')
const jwt = require('jsonwebtoken'); 
const asyncError = require('../middleware/async-error')

const addUserRegister = asyncError( async (req, res, next) => {
    try { 
        const auth = await authService();  
        const token = await auth.addUserRegister(req.body); 
        res.header('x-auth-token' , token)
        .status(200)
        .send(token)
        next(); 
    } catch(e) {  
        res.status(400).send(e.message);  
        next(e)
    }
})

const login = asyncError( async (req, res) => {
    const auth = await authService();    
    const token = await auth.login( req.body );  
    res.header('x-auth-token', token).status(200).send(token);  
})

const logout = async (req, res, next) =>{ 
    try{ 
        const auth = await authService();   
        await auth.logout();   
        res.status(200).send('success');
        next();  
    }catch(e){  
        res.status(400).send(e.message);  
        next(e)
    }
}

 
module.exports = {
    addUserRegister,
    login,
    logout
}