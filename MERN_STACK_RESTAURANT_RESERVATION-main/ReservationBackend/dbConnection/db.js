const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',       // Hostname from the URL
        port: 3306,              // Port number from the URL
        user: 'root',            // Username from the URL
        password: 'admin',       // Password from the URL
        database: 'reservations' // Database name from the URL
    }
);

connection.connect(error => {
    if (error) {
        console.error('Database connection failed: ' + error.stack);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
