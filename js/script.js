{
  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
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
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

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
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    console.log("Ruchy:", computerMove, playerMove);

    displayResult(computerMove, playerMove);

    result();
    winner();
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });

  let playerWins = 0;
  let computerWins = 0;

  const result = function () {
    document.getElementById("counter").textContent =
      playerWins + " : " + computerWins;
    console.log(playerWins, computerWins);
  };

  const winner = function () {
    if (playerWins == 3) {
      printWinner("Wygrałeś!!!");
      newStart();
    } else if (computerWins == 3) {
      printWinner("Przegrałeś!!!");
      newStart();
    }
  };

  const newStart = function newStart() {
    playerWins = 0;
    computerWins = 0;
    document.getElementById("buttons").className = "invisible";
    document.getElementById("newStart").className = "visible";
    document.getElementById("newStart").addEventListener("click", function () {
      document.getElementById("buttons").className = "visible";
      document.getElementById("newStart").className = "invisible";
      clearMessages();
      clearWinner();
      result();
    });
  };
}
