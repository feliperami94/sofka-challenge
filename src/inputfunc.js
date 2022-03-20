const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function userName_input() {
    try{
        const userName_input = await prompt("Whats your username (if it doesn't exist in the database it will be created): ")
        rl.close()
        return userName_input
        //rl.on('close', process.exit);
    } catch(err){
        console.error("unable to create username",err)
    }
}


module.exports = userName_input;