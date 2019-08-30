module.exports = function (handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res) 
        } 
        catch (ex) {    
            if(['authError','customerError','userError','personError'].includes(ex.name)){
                res.status(ex.status).send(ex.message);  
            } else{
                res.status(500).send('Something went wrong. Please try again later.');
            } 
            next(ex)
        }
    } 
}