const authService = require('../services/auth')
const jwt = require('jsonwebtoken');

const addUserRegister = async (req, res, next) => {
    try { 
        const auth = await authService();  
        const token = await auth.addUserRegister(req.body); 
        res.header('x-auth-token' , token)
        .status(200)
        .send(token)
        next(); 
    } catch(e) {  
        res.status(400).send(e.message);  
    }
}

const login = async (req, res, next) => {
    try { 
        const auth = await authService();   
        const {userName , passWord} = req.body;
        const token = await auth.login(userName , passWord); 
        res.header('x-auth-token', token).status(200).send(token);
        next(); 
    } catch(e) {
        res.status(400).send(e.message);  
    }
}

const logout = async (req, res, next) =>{ 
    try{
        console.log('this is logout')
        const auth = await authService();   
        await auth.logout();   
        res.status(200).send('success');
        next();  
    }catch(e){  
        res.status(400).send(e.message);  
    }
}

 
module.exports = {
    addUserRegister,
    login,
    logout
}