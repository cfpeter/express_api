require('./startup/logger') 
const server = require('./startup/server')
const config = require('./config')



const startServer = async () => {
    await server(config); 
}
startServer()



