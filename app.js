// script for the menu/sidebar
const navTag = document.querySelector("nav");
const toggleTag = document.querySelector(".toggle-nav");

toggleTag.addEventListener("click", function () {
  navTag.classList.toggle("open"); // be careful not to add the class dot or it won't work
  if (navTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img class="test" src="./resources/close.svg">`;
  } else {
    toggleTag.innerHTML = `<img class="test" src="./resources/menu.svg">`;
  }
});
