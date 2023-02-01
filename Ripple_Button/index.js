const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  x = event.pageX - btnEl.offsetLeft;
  y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
