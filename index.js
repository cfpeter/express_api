const server = require('./startup/server')
const config = require('./config')

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err, origin) => {
     console.log(err)
     process.exit();  
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
  });
  
 
const startServer = async () => {
    const s = await server(config); 
}


startServer()


