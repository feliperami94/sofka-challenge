var mysql = require('mysql2'); //Load the mysql client for node.js
//mysql connection
var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: ''
});

async function getQuestionsDB() {
    return new Promise(function(resolve, reject) {
        connection.query(`SELECT * FROM questions`, (error, results) => {
        if(error){
            return reject(error);
        } else {
            if (results && results.length > 0) {
                resolve(results); 
            }else {
                resolve("The Question Database is empty, contact the developer")
            }
            
        }
        });
    })
}

module.exports = getQuestionsDB;