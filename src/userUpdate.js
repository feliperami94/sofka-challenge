var mysql = require('mysql2'); //Load the mysql client for node.js
//mysql connection
var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: 'Fr3122259225'
});

async function userUpdateLevel(newUserLevel, currentPlayer) {
    return new Promise(function(resolve, reject) {
        connection.query(`UPDATE users SET userLevel = ${newUserLevel} WHERE userName = "${currentPlayer}"`, (error, results) => {
        if(error){
            return reject(error);
        } else {
            if (results && results.length > 0) {
                resolve(results); 
            }else {
                resolve("Unable to continue to the next level due to problems with the database update")
            }
            
        }
        });
    })
}

module.exports = userUpdateLevel;