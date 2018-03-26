var mysql = require('mysql');

// If we plan to deploy db on cloud then config needs to be updated
var db_config = {
						host     : 'localhost',
						user     : 'root',
						password : 'admin',
						database : 'fandango'
					}

// mysql connection
var connection =  mysql.createConnection(db_config);
console.log("Mysql Connection is set ...")

module.exports = connection;
