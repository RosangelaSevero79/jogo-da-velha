const currentPlayer = document.querySelector(".currentPlayer");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

let selected;
let player;
let player1Name;
let player2Name;

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function startGame() {
  player1Name = player1Input.value || "Jogador 1";
  player2Name = player2Input.value || "Jogador 2";

  player = "X";
  init();
}

function init() {
  selected = [];

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player === "X" ? player1Name : player2Name}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player === "X" ? player1Name : player2Name}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";
  let playerName = playerLastMove === "X" ? player1Name : player2Name;

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert(`O JOGADOR '${playerName}' GANHOU!`);
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}