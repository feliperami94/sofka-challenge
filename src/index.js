///////////////////Requiring modules needed for the game//////////////////////
const express = require('express');
const app = express(); //Creates the express server
const nameInput = require("./inputfunc"); // Load a function to receive the username as input
var mysql = require('mysql2'); //Load the mysql client for node.js
//mysql connection
var connection = mysql.createConnection({ //Establish a connection. My database is local.
    host: 'localhost',
    database: 'questions_db',
    user: 'root',
    password: 'Fr3122259225'
});

//Import custom modules for queries of the database and user inputs.
const usersQuery = require("./usersQuery");
const questionsQuery = require("./questionsQuery");
const userGuess_input = require("./userGuess");
const userUpdateLevel = require("./userUpdate");

//Settings of the server
app.set('port', 8080);

///////////////////General Class Definitions and variables//////////////////////

//Definition of Rewards Array
gameRewards = [100, 200, 300, 500, 1000];

//Definition of Player constructor function
function PlayerPrototype(userID, userName, userLevel, rewards){
    this.userID = userID;
    this.userName = userName;
    this.userLevel = userLevel;
};
PlayerPrototype.prototype.levelup = function() {
    this.userLevel += 1;
}
PlayerPrototype.prototype.loadRewards = function() {
    if(this.userLevel == 1) {
        this.rewards = [];
        console.log(`You haven't earned anything yet. Play and win to earn money.`);
    } else{
    this.rewards = gameRewards.slice(0,this.userLevel-1);
    let totalRewards = this.rewards.reduce(function(previousValue, currentValue) { 
        return previousValue +currentValue;
    });
    console.log(`Your reward: $ ${totalRewards}`)
    }
}

//Definition of Category constructor function
function CategoryPrototype(questions, answers, correctAnswers){
    this.questions = questions;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
};

//Definition of RandomQuestion constructor function
function QuestionPrototype(category, question, answers, correctAnswer){
    this.category = category;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
///////////////////Game Execution//////////////////////


//First of all, when starting the program, the user is asked to input his or her username calling userCallDB.
var playerFromDB;
var NewPlayer;
userCallDB(); //This function asks the user for his or her username and execute a query in the database. If the username doesn't exists, it is created.
async function userCallDB(){
    const player = await nameInput();
    playerFromDB = await usersQuery(player)
    .then((currentPlayer) => {
        NewPlayer = new PlayerPrototype(currentPlayer[0].user_id, currentPlayer[0].userName, currentPlayer[0].userLevel)
        NewPlayer.loadRewards()
    })
    .then(questionCallDB());
}


//Getting the questions from the database and organizing all the info into 5 Category object instances
var questionsDB = [];
var Category1 = new CategoryPrototype([], [], []);
var Category2 = new CategoryPrototype([], [], []); 
var Category3 = new CategoryPrototype([], [], []); 
var Category4 = new CategoryPrototype([], [], []); 
var Category5 = new CategoryPrototype([], [], []); 
async function questionCallDB(){
        questionsDB = await questionsQuery()
        .then((questionsDB) => {
         for (i = 0 ; i <= 24 ; i++) {
            switch (questionsDB[i].q_level){
                case 1: categoryFill(Category1, questionsDB, i); break
                case 2: categoryFill(Category2, questionsDB, i); break
                case 3: categoryFill(Category3, questionsDB, i); break
                case 4: categoryFill(Category4, questionsDB, i); break
                case 5: categoryFill(Category5, questionsDB, i); break
        }
         } //console.log(Category4)
         })
        .then(setTimeout(() => {
            RandomQuestion();
        }, 1000));
 }

 function categoryFill(category, questionsDB, i){ //This function fills the Category Instances with the data
        category.questions.push(questionsDB[i].question);
        category.correctAnswers.push(questionsDB[i].correct_ans);
        k = i % 5;
        category.answers[k] = [];
        for (j = 0; j <= 3; j++) {
            category.answers[k].push(Object.values(questionsDB[i])[3+j]);    
        }
 }

function RandomQuestion(){ //Function for picking a random question from the category or the level of the user
    let q_category = NewPlayer.userLevel;
    let randNumb = Math.floor(Math.random() * 5);
    let cat_obj;
    switch (q_category){
        case 1: cat_obj = Category1; break
        case 2: cat_obj = Category2; break
        case 3: cat_obj = Category3; break
        case 4: cat_obj = Category4; break
        case 5: cat_obj = Category5; break
    }
    NewQuestion = new QuestionPrototype(q_category, cat_obj.questions[randNumb], cat_obj.answers[randNumb], cat_obj.correctAnswers[randNumb]);
    setTimeout(() => {
        console.log(`You are going to play level ${q_category}`);
        setTimeout(() => {
           playRound(NewQuestion); 
        }, 1500);
        
    }, 1000);
}

async function playRound(NewQuestion){
    console.log(NewQuestion.question);
    console.log(`a) ${NewQuestion.answers[0]} b) ${NewQuestion.answers[1]} c) ${NewQuestion.answers[2]} d) ${NewQuestion.answers[3]}`);
    userGuess = await userGuess_input()
    .then(userGuess => {
        switch(userGuess){
            case "a": userGuessNumber = 0; break;
            case "b": userGuessNumber = 1; break;
            case "c": userGuessNumber = 2; break;
            case "d": userGuessNumber = 3; break;
            case "x": console.log(`You decided to exit the game. Please press Ctrl + C and run again 'npm run dev' to continue playing later.`)
            process.exit(0); break;
            default: userGuessNumber = 4; break;
        }});

    if (userGuessNumber == NewQuestion.correctAnswer) {
        
        NewPlayer.levelup();
        
        if(NewPlayer.userLevel <= 5) {
            NewPlayer.loadRewards();
            console.log("Correct answer! You go to the next level")
            userUpdateLevel(NewPlayer.userLevel, `${NewPlayer.userName}`);
            RandomQuestion();
        } else if (NewPlayer.userLevel === 6){
                 console.log("You won the game, Congratulations!")
                 NewPlayer.loadRewards();
                 console.log('To play again press Ctrl + C , run again "npm run dev" and create a new username')
                 process.exit(0);
            }
    } else {
            console.log("Wrong answer, you lose all your money. Please press Ctrl + C and run again 'npm run dev' to play again");
            userUpdateLevel(1, `${NewPlayer.userName}`);
            process.exit(0);
        }
}









