var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissor");


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win (userChoice, computerChoice){
    result_p.innerHTML = userChoice + " beats " + computerChoice + ".  You win!";

}

function lose (userChoice, computerChoice){
    result_p.innerHTML = computerChoice + " beats " + userChoice + ".  You Lose";

}

function draw (userChoice, computerChoice){
    result_p.innerHTML = userChoice + " equals " + computerChoice + ".  It's a draw!";
}


function game(userChoice){
   const compChoice = getComputerChoice();
   switch (userChoice + compChoice) {
    case "RockScissor":
    case "PaperRock":
    case "ScissorPaper":
        win(userChoice, compChoice);
        break;
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
        lose(userChoice, compChoice);
        break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorScissor":
        draw(userChoice, compChoice) ;
        break;
   }
}



function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    })

    paper_div.addEventListener('click', function(){
         game("Paper");
    })

    scissors_div.addEventListener('click', function(){
         game("Scissor");
    })

}

main();