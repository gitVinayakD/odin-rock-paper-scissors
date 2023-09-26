let winCount = 0;
let loseCount = 0;

const container = document.querySelector('#result');

const roundResult = document.createElement('div');
roundResult.className="roundResult";
roundResult.textContent = "No rounds played yet!";
container.appendChild(roundResult);

const currentScore = document.createElement('div');
currentScore.className="currentScore";
currentScore.textContent = "Wins: "+winCount+", Losses: "+loseCount;
container.appendChild(currentScore);



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
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const lowerPlayer = playerSelection.toLowerCase();
    const lowerComp = computerSelection.toLowerCase();
    if (lowerPlayer === 'rock'){
        if (lowerComp === 'rock'){
            return "This round is a tie! No one wins";
        }else if (lowerComp === 'scissors'){
            winCount++;
            return "You win this round! Rock beats Scissors";
        }else if (lowerComp === 'paper'){
            loseCount++;
            return "You lose this round! Paper beats Rock";
        }
    }else if (lowerPlayer === 'paper'){
        if (lowerComp === 'rock'){
            winCount++;
            return "You win this round! Paper beats Rock";
        }else if (lowerComp === 'scissors'){
            loseCount++;
            return "You lose this round! Scissors beats Paper";
        }else if (lowerComp === 'paper'){
            return "This round is a tie! No one wins";
        }
    }else if(lowerPlayer === 'scissors'){
        if (lowerComp === 'rock'){
            loseCount++;
            return "You lose this round! Rock beats Scissors";
        }else if (lowerComp === 'scissors'){
            return "This round is a tie! No one wins";
        }else if (lowerComp === 'paper'){
            winCount++;
            return "You win this round! Scissors beats Paper";
        }
    }
}



function game(input){
    roundResult.textContent = playRound(input, getComputerChoice());
    
    if(winCount==5){
        currentScore.textContent = "You win! "+winCount+ " rounds to "+ loseCount+ " rounds";
        setFinalResultsMode();
    }else if (loseCount==5){
        currentScore.textContent ="You lose! "+winCount+ " rounds to "+ loseCount+ " rounds";
        setFinalResultsMode();
    }else {
        currentScore.textContent ="Wins: "+winCount+", Losses: "+loseCount;  
    }
}

function setFinalResultsMode(){
    const options = document.querySelector('#options');
    options.style.setProperty('display','none');
    const restart = document.createElement('button');
    restart.className="restart";
    restart.textContent = "Restart?";
    container.appendChild(restart);
    restart.addEventListener('click', () => {
        options.style.removeProperty('display');
        restart.style.setProperty('display','none');
        winCount = 0;
        loseCount = 0;
        roundResult.textContent = "No rounds played yet!";
        currentScore.textContent = "Wins: "+winCount+", Losses: "+loseCount;
        }
    );

}


let playerInput = '';
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerInput = button.id;
        game(playerInput);
        }
    );
    }
);