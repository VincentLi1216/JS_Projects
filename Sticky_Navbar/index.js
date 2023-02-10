const navbarEl = document.querySelector(".navbar");
const buttomContainerEl = document.querySelector(".bottom-container");
console.log(navbarEl.offsetHeight)
console.log(buttomContainerEl.offsetTop)
window.addEventListener("scroll", () => {
  if(window.scrollY > buttomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add("active")
  }else{
    navbarEl.classList.remove("active")
  }
});
