var mysql = require('mysql2'); //Load the mysql client for node.js

var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: 'Fr3122259225'
});

connection.connect(
    function(error){
        if(error){
            throw error;
        } else {
             console.log('CONEXION EXITOSA A LA BASE DE DATOS');
         }
    }
);

console.log('Bienvenido al mejor juego de Trivias, desarrollado por Felipe Ramirez para el challenge de sofka u')

var questionArray = [];

connection.query('SELECT * FROM questions', function(error, results, fields){
    if(error){
        throw error;
    } else {
        questionArray = results;
    }
    //console.log(questionArray);
});



connection.end();