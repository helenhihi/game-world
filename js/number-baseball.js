const input = document.querySelector("#input");
const button = document.querySelector("button");
const logs = document.querySelector("#logs");

const numberArray = []; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i <= 9; i++) {
  numberArray.push(i);
}

const answerArray = [];
for (let i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * numberArray.length);
  answerArray.push(numberArray[index]);
  numberArray.splice(index, 1);
}
console.log(answerArray);

let userGuessArray = [];
function checkUserGuess(userGuess) {
  if (!userGuess) {
    return alert("숫자를 입력해 주세요.");
  }
  if (userGuess.length !== 4) {
    return alert("4자리 숫자를 입력해 주세요.");
  }
  if (new Set(userGuess).size !== 4) {
    return alert("중복되지 않는 숫자를 입력해 주세요.")
  }
  if (userGuessArray.includes(userGuess)) {
    return alert("이미 시도했던 숫자입니다.");
  }
  return true;
}

const answer = answerArray.join("");
function loss() {
  const lossMessage = document.createTextNode(`패배! 정답은 ${answer}`);
  logs.appendChild(lossMessage);
}

let out = 0;
function onClickButton(event) {
  event.preventDefault();
  const userGuess = input.value;
  input.value = "";
  const valid = checkUserGuess(userGuess); // 답이 형식에 맞는지 검사
  if (!valid) return;
  
  // 입력한 숫자 문제없음
  if (userGuess === answer) {
    logs.innerText = "홈런!";
    return;
  }

  if (userGuessArray.length >= 9) {
    loss();
    return;
  }

  let strike = 0;
  let ball = 0;
  // answer: 3456, userGuess: 1234
  for (let i = 0; i < answer.length; i++) {
    const index = userGuess.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음
        strike++;
      } else { // 숫자만 같음
        ball++;
      }
    }
  }

  const br = document.createElement("br");
  if (strike === 0 && ball === 0) {
    out++;
    logs.append(`${userGuess}: 아웃`, br);
  } else {
    logs.append(`${userGuess}: ${strike}스트라이크, ${ball}볼`, br);
  }
  if (out === 3) {
    loss();
    return;
  }
  userGuessArray.push(userGuess);
}
button.addEventListener("click", onClickButton);