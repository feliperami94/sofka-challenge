const express = require('express');
const app = express(); //Creates the express server
const nameInput = require("./inputfunc"); // Load a function to receive the username as input

const usersQuery = require("./usersQuery");
const questionsQuery = require("./usersQuery");

//Settings of the server
app.set('port', 8080);



//Receiving the username input:
async function userCallDB(){
    const player = await nameInput();
    const playerStatus = usersQuery(player)
    .then(playerStatus => console.log(playerStatus))
    // .then(() => questionCallDB());
}

// async function questionCallDB(){
//      const questionsDB = await questionsQuery()
//      .then(questionsDB => console.log(questionsDB));
// }

userCallDB();






