const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout,
    terminal: false});

function userName_input() {
    return new Promise((resolve, reject) => {
        rl.question("Whats your username (if it doesn't exist in the database it will be created): ", (input) => resolve(input) );
        
    });
    rl.close()
    rl.on('close', process.exit);
}


module.exports = userName_input;