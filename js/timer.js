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
let firstScramble = (document.getElementById("scramble").innerHTML =
  generateScramble());
document
  .querySelector("#scramble-preview twisty-player")
  .setAttribute("alg", firstScramble);

let startTime = 0;
let timePassed = 0;
let isRunning = false;
let timerId = null;
let solves = JSON.parse(localStorage.getItem("solvesList")) || [];

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
  localStorage.setItem("solvesList", JSON.stringify(solves));
  timerId = null;
  isRunning = false;
  updateSolvesList();
  let scramble = (document.getElementById("scramble").innerHTML =
    generateScramble());
  document
    .querySelector("#scramble-preview twisty-player")
    .setAttribute("alg", scramble);
  document.getElementById("pb").innerHTML = showPb();
  document.getElementById("worst").innerHTML = showWorst();
  document.getElementById("ao5").innerHTML = showAo5();
  document.getElementById("mean").innerHTML = showMean();
  document.getElementById("ao12").innerHTML = showAo12();
  document.getElementById("total-solves").innerHTML = showTotalSolves();
}
document.addEventListener("keydown", function (event) {
  document.getElementById("time").style.color = "aqua";
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    document.getElementById("time").style.color = "#e2e8ee";
    if (!isRunning) startTimer();
    else stopTimer();
  }
});

function showPb() {
  if (solves.length === 0) return "-";
  const pb = Math.min(...solves);
  return pb;
}
function showWorst() {
  if (solves.length === 0) return "-";
  const pb = Math.max(...solves);
  return pb;
}
function showAo5() {
  if (solves.length < 5) return "-";

  let middleSolves = solves
    .slice(-5)
    .sort((a, b) => a - b)
    .slice(1, 4);
  let ao3 =
    middleSolves.reduce((sum, time) => sum + time, 0) / middleSolves.length;
  return ao3.toFixed(2);
}

function showMean() {
  if (solves.length === 0) return "-";
  let recentSolves = solves.slice();
  let mean =
    recentSolves.reduce((sum, time) => sum + time, 0) / recentSolves.length;
  return mean.toFixed(2);
}
function showAo12() {
  if (solves.length < 12) return "-";

  let middleSolves = solves
    .slice(-12)
    .sort((a, b) => a - b)
    .slice(1, 11);
  let ao10 =
    middleSolves.reduce((sum, time) => sum + time, 0) / middleSolves.length;
  return ao10.toFixed(2);
}
function showTotalSolves() {
  return solves.length;
}
function updateSolvesList() {
  let html = "";
  solves
    .slice()
    .reverse()
    .forEach((time, index) => {
      html += ` 
      <div class="solve-item">
      <div class="solve-index">#${solves.length - index}</div>
      <div class="solve-time">${time}</div>
      </div>`;
    });
  document.querySelector(".solves-list").innerHTML = html;
}
function updateStats() {
  document.getElementById("pb").innerHTML = showPb();
  document.getElementById("worst").innerHTML = showWorst();
  document.getElementById("ao5").innerHTML = showAo5();
  document.getElementById("mean").innerHTML = showMean();
  document.getElementById("ao12").innerHTML = showAo12();
  document.getElementById("total-solves").innerHTML = showTotalSolves();
}

updateSolvesList();
updateStats();
document.getElementById("clearBtn").addEventListener("click", function () {
  if (confirm("Clear all stats?")) {
    solves = [];
    localStorage.removeItem("solvesList");
    updateSolvesList();
    updateStats();
  }
});


const bg = localStorage.getItem("timerBackground");
if (bg) {
  document.querySelector("main").style.backgroundImage = `url(${bg})`;
  document.querySelector("main").style.backgroundSize = "cover";
  document.querySelector("main").style.backgroundPosition = "center";
}
