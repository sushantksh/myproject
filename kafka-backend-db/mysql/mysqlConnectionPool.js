var mysql = require('mysql');

// If we plan to deploy db on cloud then config needs to be updated
var pool_config = {
						connectionLimit: 100,
						host     : 'localhost',
						user     : 'root',
						password : 'admin',
						database : 'fandango'
					}
// connection pool
var pool =  mysql.createPool(pool_config);
console.log("Connection pool is set ...")

module.exports = pool;
