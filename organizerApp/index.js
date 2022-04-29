const express = require( 'express' );
const path = require( 'path' );
const { PORT } = require( './config' );

// routes
const users = require( './routes/users' );

const app = express();

// Middleware para archivos estáticos
app.use( express.static( path.join( __dirname, 'static' ) ) )

// Sección para rutas
app.use( users );

app.get( '/', ( req, res ) => {
    console.log( __dirname );
    return res.sendFile( path.join( __dirname, 'views', 'index.html' ) );
} )

app.listen( PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${ PORT }` );
} )