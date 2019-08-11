const Joi = require('@hapi/joi')


module.exports.loginValidation = async (userName, passWord) => {
    try {
        const schema = Joi.object().keys({
            userName: Joi.string().min(3).max(30).required(),
            passWord: Joi.string().min(3).max(30).required()
        }) 

        await Joi.validate({userName, passWord}, schema , function (err, value) { 
            if(err !== null)
                throw( err.details[0].message)
        });
    } catch (error) {
        throw error
    } 
}


module.exports.userRegisterValidation = async (
    firstName,
    lastName,
    email,
    userName,
    passCode
) => {
    try {
        const schema = Joi.object().keys({
            firstName: Joi.string().min(3).max(30).required(),
            lastName: Joi.string().min(3).max(30).required(),
            email: Joi.string().min(3).max(30).required(),
            userName: Joi.string().min(3).max(30).required(),
            passCode: Joi.string().min(3).max(30).required()
        }) 

        await Joi.validate({
            firstName,
            lastName,
            email,
            userName,
            passCode
        }, schema , function (err, value) { 
            if(err !== null)
                throw( err.details[0].message)
        });
    } catch (error) {
        throw error
    } 
}

 