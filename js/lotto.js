const result = document.querySelector("#result");
const bonus = document.querySelector("#bonus");

const numberArray = new Array(45).fill().map((v, i) => i + 1);

let randomNumArray = [];
for (let i = 0; i < 7; i++) {
  const index = Math.floor(Math.random() * numberArray.length);
  randomNumArray.push(numberArray[index]);
  numberArray.splice(index, 1);
}
const bonusNum = randomNumArray[6];
randomNumArray.splice(6, 1);
randomNumArray.sort((a, b) => a - b);
console.log(randomNumArray, bonusNum);

function paintColor(randomNum, ball) {
  if (randomNum < 10) {
    ball.style.backgroundColor = "red";
    ball.style.color = "white";
  } else if (randomNum < 20) {
    ball.style.backgroundColor = "orange";
  } else if (randomNum < 30) {
    ball.style.backgroundColor = "yellow";
  } else if (randomNum < 40) {
    ball.style.backgroundColor = "green";
    ball.style.color = "white";
  } else {
    ball.style.backgroundColor = "blue";
    ball.style.color = "white";
  }
}

function drawBall(randomNum, parent) {
  const ball = document.createElement("div");
  ball.classList = "lotto-ball";
  paintColor(randomNum, ball);
  ball.innerText = randomNum;
  parent.appendChild(ball);
}

for (let i = 0; i < randomNumArray.length; i++) {
  setTimeout(drawBall, (i + 1) * 1000, randomNumArray[i], result);
}

setTimeout(drawBall, 7000, bonusNum, bonus);