const express = require( 'express' );
const path = require( 'path' );
const { PORT } = require( './config' );

const app = express();

app.get( '/', ( req, res ) => {
    console.log( __dirname );
    return res.sendFile( path.join( __dirname, 'static', 'index.html' ) );
} )

app.listen( PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${ PORT }` );
} )