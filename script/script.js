function getHumanChoice(){
   let player1 = prompt("Rack Paper Scissors. Choose one");
   let myString= player1. toLowerCase()
return myString;
}
function getComputerChoice() {
   let computer = Math.floor(Math.random() * 3);
   switch (computer) {
    case 0:
        computer="rock"
        break;
    case 1:
        computer="scissors"
        break;
    case 2:
        computer="paper"
        break;
    default:
        break;
    }
    return computer;
}
function playround(computerScore,humanScore){
    //run the getter functions
    let computerChoice= getComputerChoice();
    let humanChoice = getHumanChoice();
    //the logic of the program. Who wins
    if (humanChoice==computerChoice){
        console.log("Draw. "+humanChoice+" draws against "+computerChoice);
        //Player wins checking
        return null
    }else if (
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock")
      ) {
        console.log("Human wins. "+humanChoice+" beats "+computerChoice);
        return true;
    }else{
        console.log("Human loses. "+computerChoice+" beats "+humanChoice);
       return false;
    }
 
}
function playgame(){
    let hScore=0;
    let cScore=0;
    let winCheck = null;
    for (let index = 0; index < 5; index++) {
         winCheck = playround(cScore,hScore);
        if(winCheck){
            hScore++;
        }else if (winCheck===false){
            cScore++;
        }
        console.log("Human: "+hScore+ " .Computer: "+cScore)
    }
    if(hScore>cScore){
        console.log("You win");
    }else{
        console.log("You lose");
    }
}
playgame();