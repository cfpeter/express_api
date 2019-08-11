const config = require('../config')


module.exports =  async (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied: Invalid token.');

    try {
        const decoded = jwt.verify(token, config.jwtPrivateKey );
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}