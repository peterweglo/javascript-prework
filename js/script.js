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

  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty Wygrywasz!");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("Tym razem przegrywasz :(");
  } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("Remis!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty Wygrwasz");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Tym razem przegrywasz :(");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("Remis!");
  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Tym razem przegrywasz :(");
  } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("Remis!");
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Ty Wygrywasz!");
  } else {
    printMessage(
      "Błąd. Nieznany ruch gracza. Wpisałeś liczbę inną niż 1,2 lub 3."
    );
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

console.log("Ruchy:", computerMove, playerMove);

displayResult(computerMove, playerMove);
