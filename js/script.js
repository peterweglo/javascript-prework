function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
    console.log(playerWins, computerWins);

    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty Wygrywasz!");
      playerWins++;
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Tym razem przegrywasz :(");
      computerWins++;
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty Wygrywasz!");
      playerWins++;
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Tym razem przegrywasz :(");
      computerWins++;
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Tym razem przegrywasz :(");
      computerWins++;
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty Wygrywasz!");
      playerWins++;
    } else {
      printMessage(
        "Błąd. Nieznany ruch gracza. Wpisałeś liczbę inną niż 1,2 lub 3."
      );
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  console.log("Ruchy:", computerMove, playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
  result();
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
  result();
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
  result();
});

let playerWins = 0;
let computerWins = 0;

function result() {
  document.getElementById("counter").textContent =
    playerWins + " : " + computerWins;
  console.log(playerWins, computerWins);
}
