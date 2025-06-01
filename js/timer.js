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
