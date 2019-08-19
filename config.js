"use strict";

const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { 
   PORT,
   HOST,
   HOST_URL,
   COOKIE_ENCRYPT_PWD,
   SQL_SERVER,
   SQL_DATABASE,
   SQL_USER, 
   SQL_password,
   SQL_PORT,
   jwtPrivateKey
} = process.env;
 
const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// validate the required configuration information
assert( PORT, "PORT configuration is required." );
assert( HOST, "HOST configuration is required." );
assert( HOST_URL, "HOST_URL configuration is required." );
assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
assert( SQL_SERVER, "SQL_SERVER configuration is required." );
assert( SQL_DATABASE, "SQL_DATABASE configuration is required." );
assert( SQL_USER, "SQL_USER configuration is required." );
assert( SQL_password, "SQL_password configuration is required." );
assert( SQL_PORT, "SQL_PORT configuration is required." );

// export the configuration information
module.exports = {
   port: PORT,
   host: HOST,
   url: HOST_URL,
   cookiePwd: COOKIE_ENCRYPT_PWD,
   sql: { 
       server: SQL_SERVER,
       database: SQL_DATABASE, 
       user: SQL_USER,
       password: SQL_password,
       port: SQL_PORT,
       options: {
           encrypt: sqlEncrypt,
            abortTransactionOnError: true // <-- SET XACT_ABORT ON
      
       }
   },
   jwtPrivateKey: jwtPrivateKey
};