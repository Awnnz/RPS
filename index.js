// 1. Randomize computers choice
//    2. Input your choice
//    3. Compare the two results
//    4. Print the Winner (show answers if you want)

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let rng = Math.floor(Math.random() * options.length + 1);
    
    if (rng === 1) return options[0];
    if (rng === 2) return options[1];
    if (rng === 3) return options[2];
}

let rps = (playerChoice, computerChoice) => {
    let lose = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`
    let win = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`

    if (playerChoice == computerChoice) return `Draw! Both players chose ${playerChoice}`
    else if (playerChoice == 'rock' && computerChoice == 'paper') return lose;
    else if (playerChoice == 'paper' && computerChoice == 'scissors') return lose;
    else if (playerChoice == 'scissors' && computerChoice == 'rock') return lose;
    else if (playerChoice == 'rock' && computerChoice == 'scissors') return win;
    else if (playerChoice == 'paper' && computerChoice == 'rock') return win;
    else return win;
}

function askUserChoice() {
    let playerChoice = prompt('rock, paper, or scissors?').toLocaleLowerCase()
    while (['rock', 'paper', 'scissors'].indexOf(playerChoice) === -1) {
        playerChoice = prompt('Invalid Answer! rock, paper, or scissors?').toLowerCase()
    }
    return playerChoice;
}

console.log(rps(askUserChoice(), getComputerChoice()));
