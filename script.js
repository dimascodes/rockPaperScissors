// Game state
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM elements
const buttonsContainer = document.getElementById('buttons-container');
const resultDiv = document.getElementById('result');
const gameOverDiv = document.getElementById('game-over');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');

// Create buttons
const choices = ['rock', 'paper', 'scissors'];
choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.addEventListener('click', () => playRound(choice));
    buttonsContainer.appendChild(button);
});

// Game functions
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const updateScore = () => {
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
};

const displayResult = (message) => {
    resultDiv.textContent = message;
};

const disableButtons = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
};

const checkGameOver = () => {
    if (humanScore === winningScore || computerScore === winningScore) {
        const winner = humanScore === winningScore ? 'You win the game!' : 'Computer wins the game!';
        gameOverDiv.textContent = winner;
        disableButtons();
        return true;
    }
    return false;
};

const playRound = (humanChoice) => {
    if (checkGameOver()) return;

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        displayResult("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    updateScore();
    checkGameOver();
};
