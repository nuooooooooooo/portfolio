const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

let interval = null;

// move the eyes every 3 seconds
const startInterval = function () {
  clearInterval(interval);
  interval = setInterval(() => {
    moveEye(irisLeft, 5000, 2000);
    moveEye(irisRight, -5000, 2000);
  }, 3000);
};

const moveEye = function (tag, mouseX, mouseY) {
  // center of the eye
  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  // find the difference between the eye and the mouse
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY - window.pageYOffset;
  console.log(diffX, diffY);

  //   pythagoras formula
  const diff = Math.sqrt(diffX * diffX + diffY * diffY);

  //   capped radius (smaller triangle radius)
  const radius = Math.min(7.5, diff);

  //   calculate tan
  const angle = Math.atan2(diffY, diffX);

  //  inner eye version of the triangle linking eye to mouse
  const cappedX = radius * Math.cos(angle);
  const cappedY = radius * Math.sin(angle);

  const eyeTag = tag.querySelector("div");
  eyeTag.style.left = cappedX + "px";
  eyeTag.style.top = cappedY + "px";
};

const googlyEyesSection = document.querySelector(".contacts");

googlyEyesSection.addEventListener("mousemove", function (event) {
  startInterval();
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});
