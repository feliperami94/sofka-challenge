var mysql = require('mysql2'); //Load the mysql client for node.js
//mysql connection
var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: 'Fr3122259225'
});

// Function to insert single row values in
// the database

async function usersQuery(player) {
    return new Promise(function(resolve, reject) {

        connection.query(`SELECT * FROM users WHERE userName = "${player}"`, (error, results) => {
        if(error){
            return reject(error);
        } else {
            if (results && results.length > 0) {
               resolve(results); 
            }else {
                newUserInsert(player);
                usersQuery(player);
            }
            
        }
        });
    })
}

function newUserInsert(player){
    let query = `INSERT INTO users (userName) VALUES (?);`;
    // Value to be inserted
    let userNamedb = player;
    // Creating queries
    connection.query(query, [userNamedb], (err, rows) => {
        if (err) {
            throw err
        } else{
            console.log("User created succesfully");
        }
    });
};



module.exports = usersQuery;

// connection.end();