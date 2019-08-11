const config = require('../config')
const person = require( "./person" ); 
const auth = require('./auth')
const user = require('./user')
const sql = require( "mssql" );

const client = async () => {
   let pool = null;

   const closePool = async () => {
       try {
           // try to close the connection pool
           await pool.close();

           // set the pool to null to ensure
           // a new one will be created by getConnection()
           pool = null;
       } catch ( err ) {
           // error closing the connection (could already be closed)
           // set the pool to null to ensure
           // a new one will be created by getConnection()
           pool = null;
           server.log( [ "error", "data" ], "closePool error" );
           server.log( [ "error", "data" ], err );
       }
   };

   const getConnection = async () => {
       try {
           
           if ( pool ) {
               // has the connection pool already been created?
               // if so, return the existing pool
               return pool;
           }
          
           // create a new connection pool
            pool = await new sql.ConnectionPool(config.sql)
            .connect()
            .then(pool => {
                console.log('Connected to MSSQL')
                return pool
            })
            .catch(async err => {
                console.log( [ "error", "data" ], "connection pool error" );
                console.log( [ "error", "data" ], err );
                await closePool();
            } );  


           return pool;
       } catch ( err ) {
           // error connecting to SQL  
           console.log( [ "error", "data" ], "error connecting to sql server" );
           console.log( [ "error", "data" ], err );
           pool = null;
           throw new Error(err)
       }
   };

   return {
       person: await person.register( {sql , getConnection}  ),
       auth: await auth.register( {sql , getConnection}  ),
       user: await user.register( {sql , getConnection}  )
   };
};

module.exports = client; 
