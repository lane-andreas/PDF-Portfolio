let degrees = 0;
let zoomValue = 1;
let mainElement = document.querySelector("main");
let sectionElement = document.querySelector("section");
let zoomText = document.querySelector("#zoomText");
let pageCount = document.querySelector("#pageCount");
let opacityLayer = document.querySelector("#dark");
let bulb = document.querySelector("#bulb");

document.querySelector("#unzoom").addEventListener("click", function () {
  zoomValue = zoomValue - 0.1; // Increment degrees by 90, and ensure it stays within 0-359
  if (zoomValue <= 0.1) zoomValue = 0.1;
  mainElement.style.zoom = zoomValue;
  sectionElement.style.zoom = zoomValue;
  zoomText.textContent = Math.round(zoomValue * 100) + "%";
});
document.querySelector("#zoom").addEventListener("click", function () {
  zoomValue = zoomValue + 0.1; // Increment degrees by 90, and ensure it stays within 0-359
  if (zoomValue >= 2.5) zoomValue = 2.5;
  mainElement.style.zoom = zoomValue;
  sectionElement.style.zoom = zoomValue;
  zoomText.textContent = Math.round(zoomValue * 100) + "%";
});

document.querySelector("#rotate").addEventListener("click", function () {
  degrees = degrees + 90; // Increment degrees by 90, and ensure it stays within 0-359
  mainElement.style.rotate = degrees + "deg";
  sectionElement.style.rotate = degrees + "deg";
});

document.querySelector("#expand").addEventListener("click", function () {
  var expandValue = mainElement.style.width;
  if (expandValue == "50vw") mainElement.style.width = "95vw";
  else mainElement.style.width = "50vw";

  var expandValue2 = sectionElement.style.width;
  if (expandValue2 == "50vw") sectionElement.style.width = "95vw";
  else sectionElement.style.width = "50vw";
});

document.querySelector("#lightbulb").addEventListener("click", function () {
  var opacityValue = opacityLayer.style.opacity;
  if (opacityValue == "0") {
    opacityLayer.style.opacity = "0.4";
    bulb.setAttribute("icon", "material-symbols:lightbulb-outline");
  } else {
    opacityLayer.style.opacity = "0";
    bulb.setAttribute("icon", "material-symbols:lightbulb");
  }
});

mainElement.onmouseover = function () {
  pageCount.textContent = "1 / 2";
};
sectionElement.onmouseover = function () {
  pageCount.textContent = "2 / 2";
};

const elements = document.querySelectorAll(".animate");

let index = 0;

const intervalId = setInterval(() => {
  if (index < elements.length) {
    elements[index].classList.add("load");
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 500);
