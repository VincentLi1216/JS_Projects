const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");

let currentImg = 0;
const imgsEl = document.querySelectorAll("img");
let imgsLength = 10;

let timeout;

for (let index = 0; index < imgsLength; index++) {
  let newImg = document.createElement("img");
  newImg.src = `https://picsum.photos/id/${index*10 + 2}/500/300`;
  newImg.style.borderRadius = "10px"
  imageContainerEl.appendChild(newImg);
}

nextEl.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

function updateImg() {
  clearTimeout(timeout);
  if (currentImg > imgsLength - 1) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = imgsLength - 1;
  }
  imageContainerEl.style.transform = `translateX(-${currentImg * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

updateImg();
