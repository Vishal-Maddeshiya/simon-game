let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;

let btns = ["red", "yellow", "green", "blue"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game start");
    started = true;
    levelUp();
  }
});

function gameFalsh(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 250);
}
function userFalsh(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `level = ${level}`;

  let randInx = Math.floor(Math.random() * 4);
  let randCol = btns[randInx];
  let randBtn = document.querySelector(`.${randCol}`);
  gameSeq.push(randCol);
  console.log(gameSeq);
  gameFalsh(randBtn);
}

function btnPress() {
  let btn = this;
  let userCol = btn.getAttribute("id");
  userSeq.push(userCol);
  console.log(userSeq);
  userFalsh(btn);
  chekAns(userSeq.length - 1);
}
let h2 = document.querySelector("h2");
function chekAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h3.innerHTML = `Game over! Your score is <i>${level}</i> <br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    if (highScore < level) {
      highScore = level;
      h2.innerText = `High Score : ${highScore}`;
    } else {
      h2.innerText = `High Score : ${highScore}`;
    }
    reset();
  }
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  console.log(highScore);
  level = 0;
}
