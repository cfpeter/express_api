const express = require('express')
const allowOrign = require('./Allow-Origin');


module.exports = async (server) => { 
    await server.use(express.json())  
    await server.use(express.urlencoded({ extended: true }))  
    await server.use(allowOrign);
    
}
 
 