
const helmet = require('helmet');
const compression = require('compression')

module.exports = function(server){
    server.use(helmet());
    server.use(compression())
}