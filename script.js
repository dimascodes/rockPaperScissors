const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "rock";
    }else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const getHumanChoice = () => {
   const userInput = prompt("choose rock, paper, or scissors : ");
   return userInput.toLowerCase();
}

console.log (getHumanChoice());

let humanScore = 2;
let computerScore = 1;

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice ) {
        console.log("it's a tie !");
    }else if( (humanChoice === "rock" && computerChoice === "scissors" ) ||
                (humanChoice === "paper" && computerChoice === "rock") || 
                (humanChoice === "scissors" && computerChoice === "paper") )
    {
        humanScore++;
        console.log(`you win!! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);

    };


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const playGame = () => {
    
    humanScore = 0;
    computerScore = 0;

    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`WINNNERR!! final score: Human ${humanScore}, Computer ${computerScore}`)
    }else if (humanScore < computerScore) {
        console.log(`LOOSEERR!! final score: Human ${humanScore}, Commputer ${computerScore} `)
    } else {
        console.log(`TIE!! Final score: Human ${humanScore}, COmputer ${computerScore}`)
    }
}

playGame();