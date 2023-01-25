const choiceNbr = ["rock","paper", "scissors"];

function getComputerChoice(){
    choice = randomBetween(1, 3);
    console.log(`The computer chose ${choiceNbr[choice - 1]}.`);
    return choice;
}
function getPlayerChoice(){
    let playerSelection = "default";
    do{
        if(playerSelection != "default")
            console.log("Invalid input. Try again :v");
        playerSelection = prompt("Write your choice of hand : ").toLowerCase();
        console.log(`You chose ${playerSelection}.`);
        for (let i=0; i < choiceNbr.length; i++) 
            if((playerSelection == choiceNbr[i]))
                return i+1;
           
    }while(true)
}

function isInvalidInput(playerSelection){
    return playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors";
}

function randomBetween(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function play(playerSelection, computerSelection){
    
    const outcome = 1;
    
    const outcomeId = playerSelection.toString() + computerSelection;
    console.log("Outome ID : " + outcomeId);

    const outcomeText = (outcome) ? "won" : "lost";
    if(outcome != -1) 
        console.log(`You ${outcomeText} this round!`);
    else  
        console.log("It's a tie!");    
    return outcome;
}



function game(){
    newGame = true;
    console.log("Welcome to Rock Paper Scissors Game!");
    do{
        let playerScore = 0; 
        let computerScore = 0;
        for(let i = 0; i < 5; i++){

            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            switch(play(playerSelection, computerSelection)){
                case 0: ++computerScore
                break;
                case 1: ++playerScore 
                break;
            }
            console.log(`Current results :
            Player wins ; ${playerScore}
            computer wins : ${computerScore} `); 
            
        }  
    playAgainAnswer = prompt("Do you want to play again? (y/n)");
    playAgain = (playAgainAnswer.toLowerCase() === "y") ? true : false;
    }while(playAgain === true); 
}

game();