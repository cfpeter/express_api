const Joi = require('@hapi/joi')
const authError = require('./authError')



module.exports.loginValidation = async (userName, password) => {
    try {
        const schema = Joi.object().keys({
            userName: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(3).max(30).required()
        }) 

        await Joi.validate({userName, password}, schema , function (err, value) { 
            if(err !== null) 
                throw new authError(err.details[0].message, 400);     
        });
    } catch (error) {
        throw error
    } 
}


module.exports.userRegisterValidation = async (
    firstName,
    lastName,
    gender,
    email,
    userName,
    password,
    customerTypeName
) => {
    try {
        const schema = Joi.object().keys({
            firstName: Joi.string().min(3).max(30).required(),
            lastName: Joi.string().min(3).max(30).required(),
            gender: Joi.string().min(3).max(30).required(),
            email: Joi.string().min(3).max(30).required(),
            userName: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(3).max(30).required(),
            customerTypeName: Joi.required(),
            
        }) 

        await Joi.validate({
            firstName,
            lastName,
            gender,
            email,
            userName,
            password,
            customerTypeName
        }, schema , function (err, value) { 
            if(err !== null)
                throw( err.details[0].message)
        });
    } catch (error) {
        throw error
    } 
}

 