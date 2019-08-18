const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => { 
  
    const listCustomerType = async () => {
        try {
            // get a connection to SQL Server
            const cnx = await getConnection(); 
            // create a new request
            const request = await cnx.request();
            // return the executed query  
            return await request.execute( '[definition].[uspListCustomerType]' ); 
             
        } catch (error) { 
            throw ('- repo - We are unable to proccess this request. Please try again later.') 
        }
    };


    return { 
        listCustomerType
    };
};

module.exports = { register };