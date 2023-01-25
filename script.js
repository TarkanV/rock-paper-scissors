function getComputerChoice(){

}

function play(playerSelection, computerSelection){
    const playerSelection = ps = ps.charAt(0).toUpperCase() + ps.slice(1).toLowerCase();
    const win = true;
    const outcome = (win) ? "win" : "lose";
    return `You ${outcome}!`;
}


function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
    }   
}