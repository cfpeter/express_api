const express = require('express');
const server = express(); 
const routes = require('../routes');
const allowOrign = require('../middleware/Allow-Origin');
const error = require('../middleware/error')


module.exports = async (config) => {
    const { port } = config;
    
    await server.use(allowOrign);
    await server.use(express.json())  
    await server.use(express.urlencoded({ extended: true }))  
    await routes(server);

    //last one
    server.use(error);

    
    server.listen(port, () => console.log( `Server listening on port ${port} !!!`))
}



 