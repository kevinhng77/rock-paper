const options=["rock","paper","scissors"];
const random= Math.floor(Math.random() * options.length);
console.log(random, options[random]);

var wins = 0;
var losses = 0;
var ties = 0;

function Game(){
    if (random === "rock" && startUp === "rock"){
        ties +=1;
    }
    else if ((random === "rock") && (startUp === "paper")){
        wins += 1;
    }
    else if (random === "rock" &&  startUp === "scissors"){
        losses += 1;
    }
    else if (random === "paper" && startUp === "rock"){
        losses += 1;
    }
    else if (random === "paper" && startUp === "paper"){
        ties += 1;
    }
    else if (random === "paper" && startUp === "scissors"){
        wins += 1;
    }
    else if (random === "scissors" && startUp === "rock"){
        wins += 1;
    }
    else if (random === "scissors" && startUp === "paper"){
        losses += 1;
    }
    else if (random === "scissors" && startUp === "scissors"){
        ties += 1;
    }

}

function PlayGame(){
    let startUp = prompt("Choose Between Rock Paper and Scissors");
    return startUp;

}

PlayGame();
console.log(wins);
console.log(losses);
console.log(ties);