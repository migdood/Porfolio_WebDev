function playRockPaperScissors(){
    const rockPaperScissors = ["rock","paper", "scissors"];

    function botChoice(){
    let result = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    
    return result.toLowerCase();
    }

    function roundResult(bot, player){
        if((bot == "rock" && player == "scissors") ||
        (bot == "scissors" && player == "paper") ||
        (bot == "paper" && player == "rock"))
        {
            return "Bot Won."
        }
        else if((player == "rock" && bot == "scissors") ||
        (player == "scissors" && bot == "paper") ||
        (player == "paper" && bot == "rock"))
        {
            return "Player Won."
        }
        else if(bot == player)
        {
            return "Draw."
        }
        else
        {
            return "Wrong input.";
        }
    }

    let playerChoice = prompt("You will be playing best of 5 rounds. \nPlease Enter Rock, Paper, or Scissors");

    let stringBotChoice = botChoice();
    
    let winner = roundResult(stringBotChoice, playerChoice);

    console.log("Bot: " + stringBotChoice +"\nPlayer: "+playerChoice +"\n"+ winner);

    return winner;
}




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