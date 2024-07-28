var loader = document.querySelector(".loader")

window.addEventListener("load", Vanish)

function Vanish() {
  loader.classList.add("disappear")
}