function getComputerChoice(){
    let choice;
    let a = Math.round(Math.random()*2);
    if (a == 0){
        choice = 'Rock';
    }else if (a == 1){
        choice = 'Paper';
    }else{
        choice = 'Scissors';
    }
    console.log(a +" : "+choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const lowerPlayer = playerSelection.toLowerCase();
    const lowerComp = computerSelection.toLowerCase();
    if (lowerPlayer === 'rock'){
        if (lowerComp === 'rock'){
            return "It's a tie! No one wins";
        }else if (lowerComp === 'scissors'){
            return "You win! Rock beats Scissors";
        }else if (lowerComp === 'paper'){
            return "You lose! Paper beats Rock";
        }
    }else if (lowerPlayer === 'paper'){
        if (lowerComp === 'rock'){
            return "You win! Paper beats Rock";
        }else if (lowerComp === 'scissors'){
            return "You lose! Scissors beats Paper";
        }else if (lowerComp === 'paper'){
            return "It's a tie! No one wins";
        }
    }else if(lowerPlayer === 'scissors'){
        if (lowerComp === 'rock'){
            return "You lose! Rock beats Scissors";
        }else if (lowerComp === 'scissors'){
            return "It's a tie! No one wins";
        }else if (lowerComp === 'paper'){
            return "You win! Scissors beats Paper";
        }
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
