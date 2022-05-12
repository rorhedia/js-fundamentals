const mysql                                               = require( 'mysql2' );
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = require( './' );

const connection = mysql.createConnection( {
    host    : DB_HOST,
    port    : DB_PORT,
    user    : DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
} )

function query( sql ) {
    return new Promise( function ( resolve, reject ) {
        connection.query( sql, function ( error, result, fields ) {
            if ( error != null ) {
                return reject( {
                    error  : true,
                    message: error.sqlMessage
                } )
            }
            return resolve( result )
        } )
    } )
}

module.exports = {
    connection,
    query
}
