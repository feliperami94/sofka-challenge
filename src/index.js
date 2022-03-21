const express = require('express');
const app = express(); //Creates the express server
const nameInput = require("./inputfunc"); // Load a function to receive the username as input


const usersQuery = require("./usersQuery");
const questionsQuery = require("./questionsQuery");
const userGuess_input = require("./userGuess");
const userUpdateLevel = require("./userUpdate");

//Settings of the server
app.set('port', 8080);



//Managing the username with the database
var currentPlayer;
async function userCallDB(){
    const player = await nameInput();
    currentPlayer = await usersQuery(player)
    .then(setTimeout(() => {
      questionCallDB()  
    }, 1000));
}

//Getting the questions from the database
var questionsDB = [];
async function questionCallDB(){
        questionsDB = await questionsQuery()
        //.then(questionsDB => console.log(questionsDB))
        .then(setTimeout(() => {
            selectQuestion(questionsDB)
        }, 1500));
        
 }

var level;
var levelQuestions = [];
function selectQuestion(questionsDB){
    level = currentPlayer[0].userLevel;
    console.log(`You are going to play level ${level}`);

    for (i = 0 ; i <= 24 ; i++) {
        if (questionsDB[i].q_level == level) {
            levelQuestions.push(questionsDB[i]);    
        }  
    }
    setTimeout(() => {
        playQuestion()
    }, 2000);
    
        
};

var userGuessNumber = 0;
var userGuess;
async function playQuestion()  {
    let randNumb = Math.floor(Math.random() * 5);
    console.log(levelQuestions[randNumb].question);
    console.log(`a. ${levelQuestions[randNumb].ans_A}`);
    console.log(`b. ${levelQuestions[randNumb].ans_B}`);
    console.log(`c. ${levelQuestions[randNumb].ans_C}`);
    console.log(`d. ${levelQuestions[randNumb].ans_D}`);
    userGuess = await userGuess_input()
    // .then(userGuess => console.log(userGuess))
    .then(userGuess => {
        switch(userGuess){
            case "a":
                userGuessNumber = 0;
                break;
            case "b":
                userGuessNumber = 1;
                break;
            case "c":
                userGuessNumber = 2;
                break;
            case "d":
                userGuessNumber = 3;
                break;
            default:
                userGuessNumber = 4;
                break;
        }
        if (userGuessNumber == levelQuestions[randNumb].correct_ans) {
        console.log("Correct answer! You go to the next level")
            let newUserLevel = level + 1;
            if(newUserLevel <= 5) {
                userUpdateLevel(newUserLevel, `${currentPlayer[0].userName}`);
                levelQuestions = [];
                currentPlayer[0].userLevel = newUserLevel;
                selectQuestion(questionsDB);
            }
        } else {
            console.log("Wrong answer, try again next time.")
        }
    });

    
}

userCallDB();







