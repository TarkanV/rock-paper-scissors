const choiceNbr = ["rock","paper", "scissors"];

function getComputerChoice(){
    choice = randomBetween(1, 3);
    console.log(`The computer chose ${choiceNbr[choice - 1]}.`);
    return choice;
}
function getPlayerChoice(){
    let playerSelection = prompt("Write your choice of hand : ").toLowerCase();
    console.log(`You chose ${playerSelection}.`);
    for (let i=0; i < choiceNbr.length; i++) 
        return (playerSelection == choiceNbr[i]) ? i+1 : "failed";  
}

function randomBetween(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function play(playerSelection, computerSelection){
    
    const win = true;
    const outcome = (win) ? "win" : "lose";
    return `You ${outcome}!`;
}


function game(){
    newGame = true;
    console.log("Welcome to Rock Paper Scissors Game!");
    do{
        for(let i = 0; i < 5; i++){
            let playerScore = 0; 
            let computerScore = 0;
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            
        }  
    playAgainAnswer = prompt("Do you want to play again? (y/n)");
    playAgain = (playAgainAnswer.toLowerCase() === "y") ? true : false;
    }while(playAgain === true); 
}

game();