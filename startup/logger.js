const winston = require('winston'); 
// require('express-async-errors');
 
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [ 
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({ format: winston.format.simple() })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'unhandledRejectionException.log' }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});  
process.on('unhandledRejection', (ex) => {
  throw ex
})

module.exports = logger

 