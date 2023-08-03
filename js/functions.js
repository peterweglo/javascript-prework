function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function printWinner(msg2) {
  let div2 = document.createElement("div");
  div2.innerHTML = msg2;
  document.getElementById("winner").appendChild(div2);
}

function clearWinner() {
  document.getElementById("winner").innerHTML = "";
}
