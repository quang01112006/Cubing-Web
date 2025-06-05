const moves = ["U", "D", "L", "R", "F", "B"];  
const modifiers = ["", "'", "2"];
function generateScramble() {
  let scramble = [];
  let lastMove = null;
  while (scramble.length < 22) {
    let move = moves[Math.floor(Math.random() * 6)];
    if (move === lastMove) continue;
    let modifier = modifiers[Math.floor(Math.random() * 3)];
    scramble.push(move + modifier);
    lastMove = move;
  }
  return scramble.join(" ");
}
document.getElementById("scramble").innerHTML = generateScramble();
let startTime = 0;
let timePassed = 0;
let isRunning = false;
let timerId = null; 
let solves = [];

function updateTimer() {
  let now = Date.now();
  timePassed = (now - startTime) / 1000;
  document.querySelector("#time").innerHTML = timePassed.toFixed(2);
}

function startTimer() {
  startTime = Date.now();
  timerId = setInterval(updateTimer, 10);
  isRunning = true;
}

function stopTimer() {
  clearInterval(timerId);
  solves.push(Number(timePassed.toFixed(2)));
  timerId = null;
  isRunning = false;
  document.querySelector(".solves-list").innerHTML = solves.join("<br>");
  document.getElementById("scramble").innerHTML = generateScramble();
}

window.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    if (!isRunning) startTimer();
    else stopTimer();
  }
});
