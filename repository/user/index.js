const utils = require( "../utils" );
 
const register = ({sql , getConnection}) =>{  

    const getUserByID = async (customerID) => {
        try {
            // const sqlQueries = await utils.loadSqlQueries( "person" );
            // get a connection to SQL Server
            const cnx = await getConnection();

            // create a new request
            const request = await cnx.request();

            // configure sql query parameters
            request.input( "id", sql.Int( 50 ), customerID );

            // return the executed query
            return await request.execute( "[Customer].[uspGetUserByID]" ); 
        } catch (error) {
            throw(error)
        }
        
    };

     

    return {
        getUserByID
    }
}  

module.exports = {register} ;