const person = require('./person');
const auth = require('./auth');
const user = require('./user');
const customer = require('./customer');


module.exports = async function (router) { 

    await router.use('/api/person' , person);
    await router.use('/api/auth' , auth);
    await router.use('/api/user' , user);
    await router.use('/api/customer' , customer);

} 
