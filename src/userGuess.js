const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout,
    terminal: false});

function userGuess_input() {
    return new Promise((resolve, reject) => {
        rl.question("Enter just one letter(a, b, c or d): ", (input) => resolve(input) );
    });
}

module.exports = userGuess_input;