var mysql = require('mysql');
// Connect to mysql
var connection = require('./mysqlSingleConnection');

console.log("Single DB connection ");
exports.fetchData = (callback, query) => {
    console.log("RUNNING MySQL SELECT QUERY: " + query);
    connection.query(query, function (err, result, fields) {
      if (err) {
        console.log("ERROR: " + err.message);
        throw err;
      }
      console.log("Results: \n" + JSON.stringify(result));
      callback(err, result);
    });
    console.log("\nClose Connection ...");
    connection.end();
}

exports.insertData = (callback, query) => {
	  console.log("RUNNING MySQL INSERT QUERY: " + query);
    connection.query(query, function (err, result) {
      if (err) {
        console.log("ERROR: " + err.message);
        throw err;
      }
      console.log("Results: \n" + JSON.stringify(result));
      console.log("The inserted id is: " + result.insertId);
      callback(err, result);
    });
    console.log("\nClose Connection ...");
    connection.end();
}

exports.updateData = (callback, query) => {
	  console.log("RUNNING MySQL UPDATE QUERY: " + query);
    connection.query(query, function (err, result) {
      if (err) {
        console.log("ERROR: " + err.message);
        throw err;
      }
      console.log("Results: \n" + JSON.stringify(result));
      callback(err, result);
    });
    console.log("\nClose Connection ...");
    connection.end();
}

exports.deleteData = (callback, query) => {
	  console.log("RUNNING MySQL DELETE QUERY: " + query);
    connection.query(query, function (err, result) {
      if (err) {
        console.log("ERROR: " + err.message);
        throw err;
      }
      console.log("Results: \n" + JSON.stringify(result));
      callback(err, result);
    });
    console.log("\nClose Connection ...");
    connection.end();
}
