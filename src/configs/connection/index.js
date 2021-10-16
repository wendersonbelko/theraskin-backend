const mysql = require('mysql2');

const connection = () => {
    return mysql.createConnection(
        {
            host: 'sql221.main-hosting.eu',
            database: 'u669891649_theraskin',
            user: 'u669891649_theraskin',
            password: 'FXTCJkn~6c'
        }
    );
}

module.exports = {
    connection
}