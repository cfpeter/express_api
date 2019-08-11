const server = require('./startup/server')
const config = require('./config')

 
const startServer = async () => {
    const s = await server(config); 
}


startServer()


