const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainEl = document.createElement("div");
  colorContainEl.classList.add("color-container");
  containerEl.appendChild(colorContainEl);

}
const colorContainerEls = document.querySelectorAll(".color-container")

function generaColor(){
  colorContainerEls.forEach((colorContainerEl)=>{
    const newColorCode = randomColor();
    console.log(newColorCode)
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  })
}

generaColor();

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = ""

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1)
  }
  return colorCode
}

