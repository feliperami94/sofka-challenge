var mysql = require('mysql2'); //Load the mysql client for node.js
//mysql connection
var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: ''
});

// Function to insert single row values in
// the database

async function usersQuery(player) {
    return new Promise(function(resolve, reject) {

        connection.query(`SELECT * FROM users WHERE userName = "${player}"`, (error, results) => {
        if(error){
            return reject(error);
        } else {

            if (results && results.length > 0) { //This happens when the user already exists
               resolve(results); 
               console.log(`Player status loaded`);
            }else { //This happens when the user needs to be created in the database

                let query = `INSERT INTO users (userName) VALUES (?);`;
                let userNamedb = player;
                connection.query(query, [userNamedb], (err, rows) => {
                    if (err) {throw err}
                    else{console.log("User created succesfully");}
                    });
                    connection.query(`SELECT * FROM users WHERE userName = "${player}"`, (error, results) => {
                    resolve(results)});

            }
            
        }
        });
    })
}


module.exports = usersQuery;

// connection.end();