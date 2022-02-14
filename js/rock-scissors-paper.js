const computer = document.querySelector("#computer");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const score = document.querySelector("#score");
const IMG_URL = "./image/rsp.png";
computer.style.background = `url(${IMG_URL}) 0 0`;
computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0",
  rock: "-220px",
  paper: "-440px",
};

let computerChoice = "scissors";
function changeComputerHand() {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  computer.style.backgroundSize = 'auto 200px';
}
let intervalId = setInterval(changeComputerHand, 50);

let clickable = true;
let myScore = 0;
let computerScore = 0;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;

    const myChoice = event.target.innerText === "바위"
      ? "rock"
      : event.target.innerText === "가위"
        ? "scissors"
        : "paper";

    let message;
    if (myChoice === "rock") {
      if (computerChoice === "rock") {
        message = "무승부";
      } else if (computerChoice === "scissors") {
        myScore++;
        message = "승리";
      } else if (computerChoice === "paper") {
        computerScore++;
        message = "패배";
      }
    } else if (myChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore++;
        message = '패배';
      } else if (computerChoice === "scissors") {
        message = '무승부';
      } else if (computerChoice === "paper") {
        myScore++;
        message = '승리';
      }
    } else if (myChoice === "paper") {
      if (computerChoice === "rock") {
        myScore++;
        message = "승리";
      } else if (computerChoice === "scissors") {
        computerScore++;
        message = "패배";
      } else if (computerChoice === "paper") {
        message = "무승부";
      }
    }
    
    if (myScore >= 3) {
      score.innerText = `나의 승리 ${myScore}:${computerScore}`;
    } else if (computerScore >= 3) {
      score.innerText = `컴퓨터의 승리 ${myScore}:${computerScore}`;
    } else {
      score.innerText = `${message} ${myScore}:${computerScore}`;
      setTimeout(() => {
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
  }
};

rock.addEventListener("click", clickButton);
scissors.addEventListener("click", clickButton);
paper.addEventListener("click", clickButton);