const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries( "auth" );
  

    const getLoginByUserName = async userName => {
        try {
            // get a connection to SQL Server
            const cnx = await getConnection(); 
            // create a new request
            const request = await cnx.request();

            // configure sql query parameters
            request.input( "userName", sql.VarChar( 50 ), userName ); 

            // return the executed query  
            return await request.execute( '[Customer].[uspGetLoginByUsername]' ); 
             
        } catch (error) { 
            throw ('- repo - We are unable to proccess this request. Please try again later.') 
        }
    };

    

    const addUserRegister = async ( { 
        firstName, lastName, gender, email, userName, passCode, salt, createdBy,customerTypeName } ) => {
    
        try {
            const cnx = await getConnection();
            const request = await cnx.request();
            request.input( "firstName"  , sql.VarChar( 100 ), firstName );
            request.input( "lastName"   , sql.VarChar( 100 ), lastName );
            request.input( "gender"     , sql.VarChar( 100 ), gender );
            request.input( "email"      , sql.VarChar( 150 ), email ); 
            request.input( "userName"   , sql.VarChar( 150 ), userName ); 
            request.input( "passCode"   , sql.VarChar( 150 ), passCode ); 
            request.input( "salt"       , sql.VarChar( 150 ), salt ); 
            request.input( "customerTypeName"  , sql.VarChar( 150 ), customerTypeName ); 
            request.input( "createdBy"  , sql.VarChar( 150 ), createdBy );
            // request.input( "updatedBy"  , sql.VarChar( 150 ), createdBy );
            
            return request.execute( '[Customer].[uspAddUserRegister]' );
        } catch (error) {
            throw error
        }

        

    };

    return { 
        getLoginByUserName, 
        addUserRegister
    };
};

module.exports = { register };