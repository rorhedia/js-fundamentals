const express = require( 'express' );

const app = express();
const PORT = 4000;

app.use( express.json() );

app.get( '/', ( req, res ) => {
    res.json( { Method: 'GET' } );
} );

app.post( '/usuarios', ( req, res ) => {
    res.json( { Method: 'POST' } );
} );

app.post( '/datos-json', ( req, res ) => {
    const user = req.body
    res.json( { user } );
} );

app.put( '/', ( req, res ) => {
    res.json( { Method: 'PUT' } );
} );

app.delete( '/', ( req, res ) => {
    res.json( { Method: 'DELETE' } );
} );

app.listen( PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${ PORT }` );
} );