const options=["rock","paper","scissors"];
const random= Math.floor(Math.random() * options.length);
console.log(random, options[random]);

var wins = 0;
var losses = 0;
var ties = 0;

function Game(){
    if (random = "rock" && startUp = "rock")
    ties += 1;
    // else if (random = rock) and if (startUp = paper);
    // wins += 1;
    // else if (random = rock) and if (startUp = scissors);
    // losses += 1;
    // else if (random = paper) and if (startUp = rock);
    // losses += 1;
    // else if (random = paper) and if (startUp = paper);
    // ties += 1;
    // else if (random = paper) and if (startUp = scissors);
    // wins += 1;
    // else if (random = scissors) and if (startUp = rock);
    // wins += 1;
    // else if (random = scissors) and if (startUp = paper);
    // losses += 1;
    // else if (random = scissors) and if (startUp = scissors);
    // ties += 1;

}

function PlayGame(){
    let startUp = prompt("Choose Between Rock Paper and Scissors");
    return startUp;

}

PlayGame();
