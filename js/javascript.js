const rockPaperScissors = ["rock","paper", "scissors"];
const playerChoice = "rock";

function botChoice(){
    let result = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    
    return result.toLowerCase();
}
let botboy = botChoice();


function winner(bot, player){
    if((bot == "rock" && player == "scissors") ||
    (bot == "scissors" && player == "paper") ||
    (bot == "paper" && player == "rock"))
    {
        return "Bot Won."
    }
    else if(bot == player)
    {
        return "Draw."
    }
    else
    {
        return "Player Won.";
    }
}

function playRound(roundNum){
    for (let i = 1; i <= roundNum; i++)
    {
        console.log(winner(botChoice(), playerChoice));
    }
}

console.log(playRound(5));
/*
let answer = parseInt(prompt("Enter a number to  be FizzBuzzed: "));

for (let i = 1; i <= answer; i++) {

    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz");
    }else if(i % 5 === 0){
        console.log("Buzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else(console.log(i))

}
*/