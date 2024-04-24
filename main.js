let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['Kő', 'Papír', 'Olló'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (!playerChoice) {
        result = "Válassz!";
    } else if (playerChoice === computerChoice) {
        result = "Döntetlen!";
    } else if (
        (playerChoice === "Kő" && computerChoice === "Olló") ||
        (playerChoice === "Papír" && computerChoice === "Kő") ||
        (playerChoice === "Olló" && computerChoice === "Papír")
    ) {
        result = "Nyertél!";
        playerScore++;
    } else {
        result = "Vesztettél!";
        computerScore++;
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("computerChoice").innerHTML = `A számítógép választása: ${computerChoice}`;
    document.getElementById("score").innerHTML = `Játékos: ${playerScore} - Számítógép: ${computerScore}`;
}
