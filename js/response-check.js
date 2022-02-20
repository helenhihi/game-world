const screen = document.querySelector("#screen");
const result = document.querySelector("#result");

let startTime;
let endTime;
screen.addEventListener("click", (event) => { // screen과 event.target이 같음
  if (event.target.classList.contains("waiting")) { // 파랑
    screen.classList.replace("waiting", "ready");
    screen.innerText = "초록색이 되면 클릭하세요";
    timeoutID = setTimeout(() => {
      startTime = new Date();
      screen.classList.replace("ready", "now");
      screen.innerText = "클릭하세요!";
    }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 (2000~3000 사이 수)
  } else if (event.target.classList.contains("ready")) { // 빨강
    clearTimeout(timeoutID);
    screen.classList.replace("ready", "waiting");
    screen.innerText = "너무 성급하시군요!";
  } else if (event.target.classList.contains("now")) { // 초록
    endTime = new Date();
    const current = endTime - startTime;
    console.log(endTime, startTime);
  }
});