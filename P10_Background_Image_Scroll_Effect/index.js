const bgImageEl = document.getElementById("bg-image")
const h1El = document.querySelector("h1")

window.addEventListener("scroll", ()=>{
  updateImage();
})

function updateImage(){
  opacity_index = 1 - (window.scrollY + 33)/(h1El.offsetTop)
  bgImageEl.style.opacity = opacity_index
  console.log(opacity_index)
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%"
}