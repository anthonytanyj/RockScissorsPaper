
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    let computerChoice = ""
    if (choice === 0) {
        computerChoice = "Rock"
    } else if (choice === 1) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase()
    computerSelection = String(computerSelection).toLowerCase()

    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Your " + playerSelection + " beats computer's " + computerSelection
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Your " + playerSelection + " beats computer's "  + computerSelection
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Your " + playerSelection + " beats computer's " + computerSelection
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Computer's " + computerSelection + " beats your " + playerSelection
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Computer's " + computerSelection + " beats your " + playerSelection
    } else {
        return "You Lose! Computer's " + computerSelection + " beats your " + playerSelection
}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game() {
    let result = []
    let resultCounter = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice?");
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult);
        resultCounter = resultCounter + roundResult.includes("Win") - roundResult.includes("Lose")
        result.push(roundResult)
    }
    console.log(result)

    if (resultCounter > 0) {
        console.log("You Win!")
    } else {
        console.log("You Lose!") 
    }

}

game()