const num1 = ramdom(1, 9);
const num2 = ramdom(1, 9);
const correctAns = num1 * num2;
let score;
const savedScore = JSON.parse(localStorage.getItem("score"))

if (!savedScore){
  score = 0;
}else{
  score = savedScore;
}

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");

function render(){
  scoreEl.innerText = `Score: ${score}`;
  

}
questionEl.innerText = `What is ${num1} x ${num2}?`;

function ramdom(min, max) {
  ram_num = Math.random() * (max - min) + min;
  return Math.round(ram_num);
}

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  console.log(userAns)
  if (userAns === correctAns) {
    score++;
    saveScore();
    render();
    console.log(score);
  } else {
    score--;
    saveScore();
    render();
    console.log(score);
  }
});

function saveScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
render();