const input = document.querySelector("#input");
const button = document.querySelector("button");
const logs = document.querySelector("#logs");

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answerArray = [];

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
}

function onClickButton(event) {
  event.preventDefault();
  const userGuess = input.value; // ex) "1234"
  input.value = "";
  checkUserGuess(userGuess); // 답이 형식에 맞는지 검사
  if (userGuess === answerArray.join("")) {
    logs.innerText = "홈런!";
    return;
  }
}
button.addEventListener("click", onClickButton);


