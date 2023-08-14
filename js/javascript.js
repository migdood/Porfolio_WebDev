function BotChoice(){
    let choices = ["rock","paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
let playerWonRounds = 0;
let botWonRounds = 0;
let roundsToWin = 5;

function BotVSPlayer(bot, player){
        let result;
        if((bot == "rock" && player == "scissors") ||
        (bot == "scissors" && player == "paper") ||
        (bot == "paper" && player == "rock"))
        {
            botWonRounds++;
            result = "Bot Won.";
        }
        else if((player == "rock" && bot == "scissors") ||
        (player == "scissors" && bot == "paper") ||
        (player == "paper" && bot == "rock"))
        {
            playerWonRounds++;
            result = "Player Won."
        }
        else if(bot == player)
        {
            result = "Draw."
        }
        else
        {
            result = "Wrong input.";
        }

        return `Bot: ${bot}\nPlayer: ${player}\nConclusion: ${result}`;    
}

function PlayingRounds() {
    while (playerWonRounds < roundsToWin && botWonRounds < roundsToWin) {
        let playerChoice = prompt("Please enter Rock, Paper, or Scissors");
        if (playerChoice === null) {
            console.log("Game canceled by the player.");
            return;
        }
        
        if (!["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
            console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
            continue;
        }
        
        let botChoiceVar = BotChoice();
        console.log(`${BotVSPlayer(playerChoice.toLowerCase(), botChoiceVar)}\nBot Score: ${botWonRounds}\nPlayer Score: ${playerWonRounds}`);
    }

    if (playerWonRounds >= roundsToWin) {
        console.log("Player wins the game!");
    } else {
        console.log("Bot wins the game!");
    }

}

PlayingRounds();
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