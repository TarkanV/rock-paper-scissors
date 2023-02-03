const choiceID = ["rock","paper", "scissors"];  


function getComputerChoice(){
    let choice = randomBetween(1, 3);
    console.log(`The computer chose ${choiceID[choice - 1]}.`);
    return choice;
}
function getPlayerChoice(e){
    return +e.target.dataset.choice;
}



function randomBetween(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function calculateOutcome(outcomeId){
  
    
    switch(outcomeId){
        case "13": case "21": case "32":
            return 1;
        case "12": case "23": case "31":
            return 0;
        
        case "11": case "22": case "33" :
            return -1;
    
    }
}

function outcomeMessage(outcomeId){
    switch(outcomeId){
        case "13":  case "31":
            return "Rock beats scissors.";
        case "21":  case "12":
            return "Paper beats rock.";
        case "32":  case "23":
            return "Scissors beat paper.";
        case "11": case "22": case "33" :
            let tieID = (+(outcomeId[0]-1));
            console.log(tieID);
            let upper= choiceID[tieID][0].toUpperCase()+choiceID[tieID].slice(1);
            return `${upper} ties with ${choiceID[tieID]}.`

    }
}

function play(outcomeId){
    
    
    
   
    const outcome = calculateOutcome(outcomeId);

    const outcomeText = (outcome) ? "won" : "lost";
    if(outcome != -1) 
        console.log(`You ${outcomeText} this round!`);
    else  
        console.log("It's a tie!");    
    return outcome;
}



function game(){
    
    let hands = document.querySelectorAll(".hand");
    let resultNode = document.querySelector("#result");
    resultNode.setAttribute('style', 'white-space: pre;');
    let round = 1;
    const roundNode = document.querySelector("#round-number");
    let playerScore = 0;
    const playerScoreText = document.querySelector("#score-player");
    let cpuScore = 0;
    const cpuScoreText = document.querySelector("#score-cpu");
    let playerChoice;
    let cpuChoice; 
    const againNode = document.querySelector("#again");
    
    //Main game event
    
      hands.forEach(hand => hand.addEventListener("click", (e) => {
        resultNode.textContent = "";
        playerChoice = getPlayerChoice(e);
        resultNode.textContent += `You chose ${choiceID[playerChoice-1]}.\r\n`;
        cpuChoice = getComputerChoice();
        resultNode.textContent += `The computer chose ${choiceID[cpuChoice-1]}. `;

        const outcomeId = playerChoice.toString() + cpuChoice;
        let outcome = play(outcomeId);
        switch(outcome){
            case 0: 
                cpuScoreText.textContent = (++cpuScore).toString();
                resultNode.textContent += "MISSED!\r\n";
            break;
            case 1: 
                playerScoreText.textContent = (++playerScore).toString(); 
                resultNode.textContent += "CORRECT!\r\n";
            break;
            default: 
            resultNode.textContent +="TIE!\r\n";
            break;
        }
        resultNode.textContent += outcomeMessage(outcomeId);
        if(round < 5 && outcome != -1){
            ++round;
            roundNode.textContent = round;
            
        }
        else if(outcome == -1){

        }
        else {
            //resultNode.textContent = outcomeMessage(outcomeId) + "\r\n";
            againNode.style.visibility = "visible";
            let winner = (playerScore > cpuScore) ? "\r\nYou won this match!" :
                         (playerScore < cpuScore) ? "\r\nYou lost  this match!":
                         "This match ends in a tie!";
            resultNode.textContent += winner + " Would you like a rematch?\r\n";
        } 
        

       
        
    } ));
    
        

    againNode.addEventListener("click", () =>{
        if(round == 5){
            round = 1;
            roundNode.textContent = 1;
            playerScore = 0;
            playerScoreText.textContent = "0";
            cpuScore = 0;
            cpuScoreText.textContent = "0";
            resultNode.textContent = "Beginning of match!";
            againNode.style.visibility = "hidden";
        }

    });
    
    
   // do{

        //for(let i = 0; i < 5; i++){

            
            
        //} 
    /*
    if(playerScore > computerScore) console.log("You win!");
    else if(computerScore > playerScore) console.log("You lose :o !");
    else console.log("No one won!");  
    playAgainAnswer = prompt("Do you want to play again? (y/n)");
    playAgain = (playAgainAnswer.toLowerCase() === "y") ? true : false;
   // }while(playAgain === true);
   */ 
}

game();