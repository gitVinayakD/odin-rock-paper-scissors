let winCount = 0;
let loseCount = 0;

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
            winCount++;
            return "You win! Rock beats Scissors";
        }else if (lowerComp === 'paper'){
            loseCount++;
            return "You lose! Paper beats Rock";
        }
    }else if (lowerPlayer === 'paper'){
        if (lowerComp === 'rock'){
            winCount++;
            return "You win! Paper beats Rock";
        }else if (lowerComp === 'scissors'){
            loseCount++;
            return "You lose! Scissors beats Paper";
        }else if (lowerComp === 'paper'){
            return "It's a tie! No one wins";
        }
    }else if(lowerPlayer === 'scissors'){
        if (lowerComp === 'rock'){
            loseCount++;
            return "You lose! Rock beats Scissors";
        }else if (lowerComp === 'scissors'){
            return "It's a tie! No one wins";
        }else if (lowerComp === 'paper'){
            winCount++;
            return "You win! Scissors beats Paper";
        }
    }
}



function game(){
    for (let i=1;i<=5;i++){
        let playerInput = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerInput, getComputerChoice()));
        console.log("Wins:"+winCount+", Losses:"+loseCount)  
    }
    if(winCount>loseCount){
        console.log("You win! "+winCount+ " to "+ loseCount);
    }else if (loseCount>winCount){
        console.log("You lose! "+winCount+ " to "+ loseCount);
    }else{
        console.log("You tie! "+winCount+ " to "+ loseCount);
    }
}

game();