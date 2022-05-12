const database = require( '../config/database' );

class Users {

    async getAll() {
        try {
            return await database.query( 'SELECT * FROM users' );
        } catch ( e ) {
            throw e;
        }
    }

}

module.exports = Users;