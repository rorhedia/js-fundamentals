const express = require( 'express' );

const router = express.Router();

router.get( '/users', ( req, res ) => {
    res.json( { data: 'hola' } )
} );

router.post( '/users', ( req, res ) => {
    res.json( { data: 'hola' } )
} );

router.put( '/users', ( req, res ) => {
    res.json( { data: 'hola' } )
} );

router.delete( '/users', ( req, res ) => {
    res.json( { data: 'hola' } )
} );

module.exports = router;