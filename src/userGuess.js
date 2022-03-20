const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout,
    terminal: false});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


async function userGuess_input() {
    try{
        const userGuess_input = await prompt("Answer just one letter(a, b, c or d): ")
        rl.close()
        rl.on('close', process.exit);
        resolve(userGuess_input);
    } catch(err){
        console.error("unable to process guess",err)
    }
}


module.exports = userGuess_input;