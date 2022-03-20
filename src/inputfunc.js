const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout,
    terminal: false});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function userName_input() {
    try{
        const userName_input = await prompt("Whats your username (if it doesn't exist in the database it will be created): ")
        //rl.close()
        rl.on('close', process.exit);
        return userName_input
        
    } catch(err){
        console.error("unable to create username",err)
    }
}


module.exports = userName_input;