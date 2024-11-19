const scissors="scissors"
const paper="paper"
const rock="rock"
function getHumanChoice(choice){
    //Get it by addlistener Button
    let myString=choice;
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
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    let computerChoice= getComputerChoice();
    let humanChoice = myString;
    let whoWins=false;
    //the logic of the program. Who wins
    if (humanChoice==computerChoice){
        //console.log(;
        content.textContent = "Draw. "+humanChoice+" draws against "+computerChoice;
        //Player wins checking
        return null
    }else if (
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock")
      ) {
        content.textContent ="Human wins. "+humanChoice+" beats "+computerChoice;
        whoWins=true;
    }else{
        content.textContent ="Human loses. "//+computerChoice+" beats "+humanChoice;
       whoWins=false;
    }
    container.appendChild(content);
    return whoWins
}
function playgame(){
    let hScore=0;
    let cScore=0;
    let winCheck = null;
    let exit= true;
     while(exit){
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