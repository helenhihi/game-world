const zero = document.querySelector("#num-0");
const one = document.querySelector("#num-1");
const two = document.querySelector("#num-2");
const three = document.querySelector("#num-3");
const four = document.querySelector("#num-4");
const five = document.querySelector("#num-5");
const six = document.querySelector("#num-6");
const seven = document.querySelector("#num-7");
const eight = document.querySelector("#num-8");
const nine = document.querySelector("#num-9");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

const operatorInput = document.querySelector("#operator");
const resultInput = document.querySelector("#result");

let numberA = "";
let operator = "";
let numberB = "";

function onClickNumber(event) {
  if (operator === "") {
    numberA += event.target.innerText;
    resultInput.value = numberA;
  } else if (numberA !== "" && operator !== "") {
    numberB += event.target.innerText;
    resultInput.value = numberB;
  }
}
zero.addEventListener("click", onClickNumber);
one.addEventListener("click", onClickNumber);
two.addEventListener("click", onClickNumber);
three.addEventListener("click", onClickNumber);
four.addEventListener("click", onClickNumber);
five.addEventListener("click", onClickNumber);
six.addEventListener("click", onClickNumber);
seven.addEventListener("click", onClickNumber);
eight.addEventListener("click", onClickNumber);
nine.addEventListener("click", onClickNumber);

function onClickOperator(event) {
  if (numberA !== "") {
    operator = event.target.innerText;
    operatorInput.value = operator;
  }
}
plus.addEventListener("click", onClickOperator);
minus.addEventListener("click", onClickOperator);
divide.addEventListener("click", onClickOperator);
multiply.addEventListener("click", onClickOperator);

function onClickCalculate() {
  const nNumA = parseInt(numberA);
  const nNumB = parseInt(numberB);
  switch(operator) {
    case '+':
      resultInput.value = nNumA + nNumB;
      break;
    case '-':
      resultInput.value = nNumA - nNumB;
      break;
    case '/':
      if (nNumB === 0) {
        alert("0으로 나눌 수 없습니다.");
      } else {
        resultInput.value = nNumA / nNumB;
      }
      break;
    case 'x':
      resultInput.value = nNumA * nNumB;
      break;
    default:
      // 잘못된 연산자가 들어왔습니다.
      break;
  }
  operatorInput.value = "";
  clearOerating();
}
calculate.addEventListener("click", onClickCalculate);

function onClickClear() {
  clearOerating();
  operatorInput.value = "";
  resultInput.value = "";
}
clear.addEventListener("click", onClickClear);

function clearOerating() {
  numberA = "";
  operator = "";
  numberB = "";
}