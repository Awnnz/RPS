// 1. Randomize computers choice
//    2. Input your choice
//    3. Compare the two results
//    4. Print the Winner (show answers if you want)

// BASE GAME WITHOUT UI

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let rng = Math.floor(Math.random() * options.length + 1);
    
    if (rng === 1) return options[0];
    if (rng === 2) return options[1];
    if (rng === 3) return options[2];
}

function askUserChoice() {
    let playerChoice = prompt('rock, paper, or scissors?').toLocaleLowerCase()
    while (['rock', 'paper', 'scissors'].indexOf(playerChoice) === -1) {
        playerChoice = prompt('Invalid Answer! rock, paper, or scissors?').toLowerCase()
    }
    return playerChoice;
}

let rps = (playerChoice, computerChoice) => {
    let lose = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    let win = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;

    if (playerChoice == computerChoice) return `Draw! Both players chose ${playerChoice}`
    else if (playerChoice == 'rock' && computerChoice == 'paper') return lose;
    else if (playerChoice == 'paper' && computerChoice == 'scissors') return lose;
    else if (playerChoice == 'scissors' && computerChoice == 'rock') return lose;
    else if (playerChoice == 'rock' && computerChoice == 'scissors') return win;
    else if (playerChoice == 'paper' && computerChoice == 'rock') return win;
    else return win;
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let gamesPlayed = 0;

//     while (gamesPlayed < 5) {
//         let fullResult = rps(askUserChoice(), getComputerChoice())
//         let result = fullResult.slice(4,7);
//         if (result == 'win') playerScore++
//         else computerScore++
//         console.log(fullResult)
//         console.log(`Your score: ${playerScore}`)
//         console.log(`Cpu score: ${computerScore}`)
//         gamesPlayed++
//     }

//     return playerScore > computerScore ? 'Game Over! You win it all!' : 'Game Over! You lose it all!'
// }

// console.log(game());


// Add UI


let choices = document.querySelectorAll('.choices');
let roundResult = document.querySelector('.results');
let playerScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;

choices.forEach(choice => {

    choice.addEventListener('click', () => {
     let result = rps(choice.classList[0], getComputerChoice());
     
     if (result.slice(4,7) == 'win') playerScore++
     else if (result.slice(4,7) == 'los') computerScore++

     roundResult.textContent = result;
     document.querySelector('.playerScore').textContent = playerScore;
     document.querySelector('.cpuScore').textContent = computerScore;
     gamesPlayed++

     if (gamesPlayed == 5 && playerScore > computerScore) document.querySelector('.winner').textContent = `GAME OVER! YOU WIN IT ALL!!!`
else if (gamesPlayed == 5 && playerScore < computerScore) document.querySelector('.winner').textContent = `GAME OVER! YOU LOSE IT ALL!!!`
    })
})





    
    // `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`
    // `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`
    
    //     let fullResult = rps(askUserChoice(), getComputerChoice())
    //     let result = fullResult.slice(4,7);
    //     if (result == 'win') playerScore++
    //     else computerScore++
    //     console.log(fullResult)
    //     console.log(`Your score: ${playerScore}`)
    //     console.log(`Cpu score: ${computerScore}`)
    //     gamesPlayed++
    

    // return playerScore > computerScore ? 'Game Over! You win it all!' : 'Game Over! You lose it all!'






