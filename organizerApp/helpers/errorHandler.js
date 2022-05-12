function errorHandler( res, message ) {
    console.log( message );
    res.status( 500 ).json( {
        error  : true,
        message: '¡Ups! Algo ha salido mal'
    } )
}

module.exports = errorHandler;