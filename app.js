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

// script to close sidebar on link click
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(function (item) {
  item.addEventListener("click", function () {
    if (window.innerWidth < 700) {
      navTag.classList.toggle("open");
      toggleTag.innerHTML = `<img class="test" src="./resources/menu.svg">`;
    }
  });
});

const colors = [
  "#72ab69",
  "#92AB69",
  "#699BAB",
  "#696FAB",
  "#ab6999",
  "#AB9569",
  "#AB6969",
];

const rotateHues = [
  [150, 235],
  [90, 210],
  [220, 340],
  [260, 20],
  [270, 50],
  [50, 190],
  [0, 140],
];

// script for the project hue and color palette changes
let randomIndex = Math.floor(Math.random() * rotateHues.length);
const imgHueNezha = document.querySelector(".nezha");
const imgKobdrd = document.querySelector(".kobrd");

document.documentElement.style.setProperty(
  "--secondary-color",
  colors[randomIndex]
);

imgHueNezha.style.filter = `hue-rotate(${rotateHues[randomIndex][0]}deg)`;
imgKobdrd.style.filter = `hue-rotate(${rotateHues[randomIndex][1]}deg)`;

// TODO: dark theme, auto theme, light theme
// TODO: blog
