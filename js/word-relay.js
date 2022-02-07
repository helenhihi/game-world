const userNumber = parseInt(prompt("몇 명이 참가하시겠습3니까?"));
const order = document.querySelector("#order"); // 1
const word = document.querySelector("#word");
const input = document.querySelector("input");
const button = document.querySelector("button");
let currentWord; // 제시어
let newWord; // 새로 입력한 단어

function onClickButton(event) {
  event.preventDefault();
  newWord = input.value;
  if (word.innerText === "" || currentWord[currentWord.length - 1] === newWord[0]) {
    currentWord = newWord;
    word.innerText = currentWord;
    let orderNum = parseInt(order.innerText);
    orderNum++;
    order.innerText = orderNum;
    if (orderNum > userNumber) {
      orderNum = 1;
      order.innerText = "1";
    }
  } else {
    alert("틀렸습니다.")
  }
  input.value = "";
  input.focus();
}

button.addEventListener("click", onClickButton);

