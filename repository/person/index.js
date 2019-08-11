const utils = require( "../utils" );
 
const register = ({sql , getConnection}) =>{  

    const getPerson = async () => {
   
        const sqlQueries = await utils.loadSqlQueries( "person" );
        // get a connection to SQL Server
        const cnx = await getConnection();

        // create a new request
        const request = await cnx.request();

        // configure sql query parameters
        // request.input( "userId", sql.VarChar( 50 ), userId );

        // return the executed query
        return await request.query( sqlQueries.getPerson ); 
    };

    const addPerson = async (firstName, lastName, dob,gender, email, cellPhone,otherPhone) =>{
        console.log(lastName)
        // const sqlQueries = await utils.loadSqlQueries( "person" );
        // get a connection to SQL Server
        const cnx = await getConnection(); 
        // create a new request
        const request = await cnx.request();

        // configure sql query parameters
        request.input( "firstName",     sql.VarChar( 100 ), firstName );
        request.input( "lastName",      sql.VarChar( 100 ), lastName );
        request.input( "dob",           sql.VarChar( 50 ), dob );
        request.input( "gender",        sql.VarChar( 50 ), gender );
        request.input( "email",         sql.VarChar( 150 ), email );
        request.input( "cellPhone",     sql.VarChar( 15 ), cellPhone );
        request.input( "otherPhone",    sql.VarChar( 15 ), otherPhone );
        request.input( "userName",      sql.VarChar( 15 ), firstName + ' ' + lastName );

        // return the executed query / execute  
        return await request.execute( '[Customer].[uspInsertPerson]' ); 
    }

    return {
        getPerson,
        addPerson
    }
}  

module.exports = {register} ;