let gameBoard = document.querySelector("#main-bottom");
let num;
let timer = 60;
//this function make bubble and assign value
const bubbleMaker = () => {
  let bubbles = "";
  for (let i = 0; i <= 111; i++) {
    num = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${num}</div>`;
  }
  gameBoard.innerHTML = bubbles;
};
bubbleMaker();

// create new hit
let hit;
const getNewHit = () => {
  hit = document.querySelector("#hit");
  hit.innerText = Math.floor(Math.random() * 10);
};
getNewHit();
// score function
let score = 0;
let scoreBtn = document.querySelector("#score");
const increaseScore = () => {
  score += 10;
  scoreBtn.innerText = score;
};
// timer function
const timerFnc = () => {
  if (timer > 0) {
    timer -= 1;
    document.querySelector("#timer").innerText = timer;
  } else {
    gameBoard.style.flexDirection = "column";
    gameBoard.innerHTML = `<h1>Game Over!</h1><h2>Your score is ${score} </h2><button><h3>Restart</h3></button>`;
  }
};
setInterval(timerFnc, 1000);

gameBoard.addEventListener("click", (det) => {
  if (det.target.innerText == hit.innerText) {
    increaseScore();
    bubbleMaker();
    getNewHit();
  } else if (det.target.innerText == "Restart") {
    timer = 60;
    score = 0;
    scoreBtn.innerText = score;
    bubbleMaker();
    getNewHit();
    timerFnc();
  }
});
