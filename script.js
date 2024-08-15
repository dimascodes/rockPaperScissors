let notify = "this game a play in 5 round.";
alert(notify);


const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (random === 0) {
        return "rock";
    }else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}



const getHumanChoice = () => {
   const userInput = (prompt("choose rock, paper, or scissors : "));
   return userInput.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();// Ensure case-insensitivity

    if (humanChoice === computerChoice ) {
        alert("it's a tie !");
    }else if( (humanChoice === "rock" && computerChoice === "scissors" ) ||
                (humanChoice === "paper" && computerChoice === "rock") || 
                (humanChoice === "scissors" && computerChoice === "paper") )
    {
        humanScore++;
        alert(`you win!! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        alert(`you lose! ${computerChoice} beats ${humanChoice}`);

    };


}

const playGame = () => {
    // Reset scores before starting a new game
    humanScore = 0;
    computerScore = 0;

    const totalRounds = 5;

    for (let i = 0; i < totalRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        // Calculate rounds remaining
        const currentRound = i + 1;
        const roundsRemaining = totalRounds - currentRound;

        // Show alert after each round
        if (roundsRemaining > 0) {
            alert(`Games round ${currentRound}, ${roundsRemaining} games remaining`);
        } else {
            alert(`Final round completed!`);
        }
    }

    // Announce the overall winner
    if (humanScore > computerScore) {
        alert(`WINNNERR!! final score: Human ${humanScore}, Computer ${computerScore}`)
    }else if (humanScore < computerScore) {
        alert(`LOOSEERR!! final score: Human ${humanScore}, Commputer ${computerScore} `)
    } else {
        alert(`TIE!! Final score: Human ${humanScore}, COmputer ${computerScore}`)
    }
}

playGame();