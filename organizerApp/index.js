const express  = require( 'express' );
const path     = require( 'path' );
const { PORT } = require( './config' );

// routes
const users = require( './routes/users' );

const app = express();

// Middleware para archivos estáticos
app.use( express.static( path.join( __dirname, 'static' ) ) );

// Sección para rutas
users( app );

app.get( '/', ( req, res ) => {
    return res.sendFile( path.join( __dirname, 'views', 'index.html' ) );
} );

app.listen( PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${ PORT }` );
} );